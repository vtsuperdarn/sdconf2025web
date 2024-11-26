# SuperDARN 2025 Workshop Website

A modern, responsive conference website built with Next.js for the SuperDARN 2025 Workshop in Roanoke, Virginia.

## Project Overview

This website serves as the primary platform for the SuperDARN 2025 Workshop, providing information about:

- Conference venue and lodging
- Registration details
- Abstract submission
- Travel information
- Participant information

## Tech Stack

- **Framework**: Next.js 14 (React)
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

### App Directory (Modern Next.js Routing)

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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
