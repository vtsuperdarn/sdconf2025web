import { google } from 'googleapis';
import * as path from 'path';

export type UpdateType = 'announcement' | 'schedule_change' | 'room_change' | 'emergency';

export interface ConferenceUpdate {
  type: UpdateType;
  title: string;
  content: string;
  timestamp: string;
}

export async function getSheetData() {
  try {
    // First, verify required environment variables
    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) {
      console.error('GOOGLE_SHEET_ID is not set');
      return [];
    }

    let auth;
    
    if (process.env.NODE_ENV === 'development') {
      // Development: Use JSON file
      const keyFilePath = path.join(process.cwd(), 'superdarn-workshop-2025-a0a3ff4dbfa8.json');
      auth = new google.auth.GoogleAuth({
        keyFile: keyFilePath,
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
      });
    } else {
      // Production: Use JSON string from environment
      const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS || '{}');
      
      if (!credentials.private_key || !credentials.client_email) {
        console.error('Missing required credentials');
        return [];
      }

      auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
      });
    }

    console.log('Auth created, Sheet ID:', sheetId); // Debug log

    const sheets = google.sheets({ version: 'v4', auth });
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: 'Sheet1!A2:D',
    });

    const rows = response.data.values;
    console.log('Fetched rows:', rows?.length || 0);

    if (!rows) return [];

    return rows.map((row): ConferenceUpdate => ({
      type: row[0] as UpdateType,
      title: row[1],
      content: row[2],
      timestamp: row[3]
    }));

  } catch (err) {
    console.error('Error fetching sheet data:', err);
    if (err instanceof Error) {
      console.error('Error details:', {
        message: err.message,
        name: err.name,
        stack: err.stack
      });
    }
    return [];
  }
} 