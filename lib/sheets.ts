import { google } from 'googleapis';

export type UpdateType = 'announcement' | 'schedule_change' | 'room_change' | 'emergency';

export interface ConferenceUpdate {
  type: UpdateType;
  title: string;
  content: string;
  timestamp: string;
  active: boolean;
}

export async function getSheetData() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A2:E', // Skips header row
    });

    const rows = response.data.values;

    if (!rows) return [];

    return rows.map((row): ConferenceUpdate => ({
      type: row[0] as UpdateType,
      title: row[1],
      content: row[2],
      timestamp: row[3],
      active: row[4] === 'TRUE'
    })).filter(update => update.active);

  } catch (err) {
    console.error('Error fetching sheet data:', err);
    return [];
  }
} 