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
    let auth;
    
    if (process.env.NODE_ENV === 'development') {
      const keyFilePath = path.join(process.cwd(), 'superdarn-workshop-2025-a0a3ff4dbfa8.json');
      auth = new google.auth.GoogleAuth({
        keyFile: keyFilePath,
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
      });
    } else {
      // Production environment
      try {
        // First attempt: Try with direct private key
        const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY!
          .replace(/\\n/g, '\n')
          .replace(/"$/, '')
          .replace(/^"/, '');

        const credentials = {
          type: 'service_account',
          project_id: 'superdarn-workshop-2025',
          private_key_id: 'a0a3ff4dbfa8',
          private_key: privateKey,
          client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
          client_id: '117965931676517548001',
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(
            process.env.GOOGLE_SHEETS_CLIENT_EMAIL || ''
          )}`
        };

        auth = new google.auth.GoogleAuth({
          credentials,
          scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
        });
      } catch (authError) {
        console.error('First auth attempt failed:', authError);
        
        // Second attempt: Try with modified key format
        const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY!
          .split('\\n')
          .join('\n');

        const credentials = {
          type: 'service_account',
          project_id: 'superdarn-workshop-2025',
          private_key_id: 'a0a3ff4dbfa8',
          private_key: privateKey,
          client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
          client_id: '117965931676517548001',
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(
            process.env.GOOGLE_SHEETS_CLIENT_EMAIL || ''
          )}`
        };

        auth = new google.auth.GoogleAuth({
          credentials,
          scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
        });
      }
    }

    console.log('Auth created successfully');
    const sheets = google.sheets({ version: 'v4', auth });
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
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