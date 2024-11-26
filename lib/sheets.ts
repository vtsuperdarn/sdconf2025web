import { google } from 'googleapis';
import * as path from 'path';
import * as fs from 'fs';

export type UpdateType = 'announcement' | 'schedule_change' | 'room_change' | 'emergency';

export interface ConferenceUpdate {
  type: UpdateType;
  title: string;
  content: string;
  timestamp: string;
}

export async function getSheetData() {
  try {
    let auth;
    
    if (process.env.NODE_ENV === 'development') {
      // In development, use the JSON credentials file that is in .gitignore
      const keyFilePath = path.join(process.cwd(), 'superdarn-workshop-2025-a0a3ff4dbfa8.json');
      auth = new google.auth.GoogleAuth({
        keyFile: keyFilePath,
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
      });
    } else {
      // In production, use environment variables
      auth = new google.auth.GoogleAuth({
        credentials: {
          private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
          client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
      });
    }

    const sheets = google.sheets({ version: 'v4', auth });
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A2:D',
    });

    const rows = response.data.values;

    if (!rows) return [];

    return rows.map((row): ConferenceUpdate => ({
      type: row[0] as UpdateType,
      title: row[1],
      content: row[2],
      timestamp: row[3]
    }));

  } catch (err) {
    console.error('Error fetching sheet data:', err);
    return [];
  }
} 