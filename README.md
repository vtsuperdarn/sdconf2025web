# SuperDARN 2025 Workshop Website

_Built and Written by [Seokhyeon Byun](https://www.seokhyeonbyun.com/)_

A modern, responsive conference website built with Next.js for the SuperDARN 2025 Workshop in Roanoke, Virginia.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Live Updates System](#live-updates-system)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment Options](#deployment-options)

## Project Overview

This website serves as the primary platform for the SuperDARN 2025 Workshop, providing information about:

- Conference venue and lodging
- Registration details
- Abstract submission
- Travel information
- Participant information

## Features

### 1. Real-Time Conference Updates

- Live announcements and updates during the conference
- Managed through Google Sheets (no technical knowledge required)
- Types of updates supported:
  - General announcements
  - Schedule changes
  - Room assignments
  - Emergency notifications

#### Components

- **Google Sheet**: Stores the updates in a structured format
- **Google Cloud API**: Provides secure access to the sheet data
- **Next.js App**: Fetches and displays updates in real-time
- **Refresh Button**: Triggers new data fetch on demand

#### Important Notes

- Make sure to copy the private key exactly as it appears in your JSON file
- The sheet ID is from your Google Sheet URL
- The service account email must have access to the sheet
- Updates work through:
  - Page load
  - When refresh button is clicked
  - Server revalidation (if configured)

### 2. Abstract Submission System (Coming Soon)

- Online abstract submission form

### 3. Registration Management (Coming Soon)

- Online registration process

### 4. Responsive Design

- Mobile-first approach
- Adapts to all screen sizes
- Optimized for both desktop and mobile devices

### 5. Performance Optimized

- Fast page loads
- Optimized images
- Efficient routing
- Server-side rendering

### 6. Content Management

- Easy content updates via Google Sheets
- No coding knowledge required
- Real-time reflection of changes
- Secure access control

## Tech Stack

- **Framework**: Next JS 15 (React)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Custom components with VT brand guidelines
- **Icons**: Lucide React

## Project Structure

```tree
├── app/
│   ├── abstract/
│   │   └── page.tsx
│   │
│   ├── participants/
│   │   └── page.tsx
│   │
│   ├── registration/
│   │   └── page.tsx
│   │
│   ├── travel/
│   │   └── page.tsx
│   │
│   ├── venue/
│   │   └── page.tsx
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── navbar.tsx
│   └── footer.tsx
│
├── lib/
│   └── utils.ts
│
├── public/
│   ├── blue-ridge.png
│   ├── hotel-roanoke.jpg
│   ├── vt-seal-white.png
│   └── nsf-logo.png
```

## Understanding the Directory Structure

### App Directory (Modern NextJS Routing)

Unlike traditional Flask routing where routes are defined in Python files (e.g., `@app.route('/about')`), Next.js uses a folder-based routing system:

- Each folder in `app/` becomes a URL route
- `page.tsx` files inside these folders define the content for that route
- Example: `app/venue/page.tsx` automatically creates `/venue` route

```
app/
├── venue/page.tsx      → accessible at /venue
├── travel/page.tsx     → accessible at /travel
├── abstract/page.tsx   → accessible at /abstract
└── page.tsx           → accessible at / (homepage)
```

### Key Files and Directories

- `layout.tsx`: Defines the common layout (navbar, footer) shared across all pages
- `page.tsx`: The actual page content for each route
- `globals.css`: Global styles applied to the entire application

### Components Directory

Contains reusable UI components that can be imported into any page:

- Not route-based
- Used for code organization and reusability
- Example: `navbar.tsx` and `footer.tsx` are used in the layout

### Public Directory

Stores static assets that are:

- Publicly accessible
- Referenced directly in code
- Example: `/public/vt-seal-white.png` is accessed as `/vt-seal-white.png` in the code

### Comparison with Flask

Flask:

```python
@app.route('/venue')
def venue():
    return render_template('venue.html')
```

Next.js:

```
app/venue/page.tsx → Automatically creates /venue route
```

This folder-based system:

- Is more intuitive
- Requires less configuration
- Automatically handles routing
- Better organizes related files

## Navigation Flow

```tree
Homepage (/)
│
├── Venue & Lodging (/venue)
│
├── Register (/registration)
│
├── Submit Abstract (/abstract)
│
├── Participants (/participants)
│
└── Travel (/travel)
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment Options

### Deploy on Vercel (Recommended)

The simplest way to deploy Next.js app is using the [Vercel Platform](https://vercel.com/new):

1. Push code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import repository on Vercel
3. Set up environment variables in Vercel:
   ```env
   GOOGLE_SHEET_ID="your-sheet-id"
   GOOGLE_CREDENTIALS={"type":"service_account","project_id":"...","private_key":"...","client_email":"..."}
   ```
   Note: The `GOOGLE_CREDENTIALS` should be a single-line JSON string containing your service account credentials.
4. Deploy

The app will automatically deploy and update when you push changes to your repository.

### Important Notes for Deployment

- The `GOOGLE_CREDENTIALS` environment variable should be the entire service account JSON key formatted as a single line
- Make sure to properly escape the private key's newlines in the JSON
- The service account email must have access to your Google Sheet
- The Sheet ID is from your Google Sheet URL: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`

## Live Updates Feature Explanation

The conference website uses Google Sheets as a lightweight CMS for real-time updates during the conference. This allows organizers to easily post announcements, schedule changes, and other updates without needing direct access to the codebase.

### Setup Google Sheets Integration

1. **Create Google Cloud Project**:

   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create new project
   - Enable Google Sheets API
   - Create service account & download credentials

2. **Create Google Sheet**:

   - Create new sheet with columns: type, title, content, timestamp, active
   - Share with service account email
   - Copy Sheet ID from URL

3. **Environment Variables**:
   Copy `.env.example` to `.env.local` and fill in your credentials:
   ```env
   GOOGLE_SHEETS_PRIVATE_KEY="your-private-key"
   GOOGLE_SHEETS_CLIENT_EMAIL="your-service-account-email"
   GOOGLE_SHEET_ID="your-sheet-id"
   ```

### Google Sheet Structure

The sheet should have the following columns:

| Column    | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| type      | Type of update (announcement/schedule_change/room_change/emergency) |
| title     | Update title                                                        |
| content   | Main content of the update                                          |
| timestamp | When the update was made (e.g., "2024-03-15 14:30:00")              |

### For Conference Organizers

To post updates during the conference:

1. Open the shared Google Sheet
2. Add a new row with your update:
   - type: Choose from 'announcement', 'schedule_change', 'room_change', or 'emergency'
   - title: Brief title for the update
   - content: Full update message
   - timestamp: Current date/time
3. The website will automatically display your update

Note: Updates will appear on the website:

- On page load
- When the refresh button is clicked
- After server revalidation

### Environment Variables Setup

For the Live Updates system to work, you'll need these environment variables:

```env
GOOGLE_SHEETS_PRIVATE_KEY="your-private-key"
GOOGLE_SHEETS_CLIENT_EMAIL="your-service-account-email"
GOOGLE_SHEET_ID="your-sheet-id"
```

These variables must be set:

- In `.env.development.local` for local development
- In `.env.production` for production deployment
- In your hosting platform's environment settings (if using Vercel)
- In Apache configuration (if using Apache server)

Without these variables properly configured, the live updates feature will not work, and the application may throw errors when trying to fetch updates.

#### Need Help?

If you're having trouble setting up the environment variables or implementing the live updates system, please contact:

[Seokhyeon Byun](https://www.seokhyeonbyun.com/) - Project Developer

### Getting Google Cloud Credentials

1. **Create a Google Cloud Project**:

   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Click "New Project" in the top-right corner
   - Enter a project name (e.g., "superdarn-2025-updates")
   - Click "Create"

2. **Enable Google Sheets API**:

   - In the [API Library](https://console.cloud.google.com/apis/library)
   - Search for "Google Sheets API"
   - Click "Enable"

3. **Create Service Account**:

   - Go to [Credentials](https://console.cloud.google.com/apis/credentials)
   - Click "Create Credentials" → "Service Account"
   - Fill in:
     - Service account name (e.g., "conference-updates")
     - Service account ID (auto-generated)
     - Click "Create and Continue"
     - Role: "Editor"
     - Click "Done"

4. **Generate Private Key**:

   - Find your service account in the list
   - Click on the email address
   - Go to "Keys" tab
   - Click "Add Key" → "Create new key"
   - Choose JSON format
   - Click "Create"
   - The key file will download automatically
   - Keep this file secure!

5. **Get Credentials from JSON**:

   ```json
   {
     "type": "service_account",
     "project_id": "your-project-id",
     "private_key_id": "key-id",
     "private_key": "-----BEGIN PRIVATE KEY-----\nYour-Key-Here\n-----END PRIVATE KEY-----\n",
     "client_email": "service-account@project.iam.gserviceaccount.com",
     "client_id": "client-id"
     // ... other fields
   }
   ```

   - Use `private_key` for GOOGLE_SHEETS_PRIVATE_KEY
   - Use `client_email` for GOOGLE_SHEETS_CLIENT_EMAIL

6. **Share Your Google Sheet**:
   - Create a new Google Sheet
   - Click "Share" in the top-right
   - Add the `client_email` from your service account
   - Give "Editor" access
   - Copy the Sheet ID from the URL:
     ```
     https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit
     ```
   - Use this ID for GOOGLE_SHEET_ID

For more detailed instructions, see:

- [Google Cloud Console Documentation](https://cloud.google.com/docs)
- [Google Sheets API Quickstart](https://developers.google.com/sheets/api/quickstart/nodejs)
