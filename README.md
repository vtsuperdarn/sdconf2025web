# SuperDARN 2025 Workshop Website

_Built and Written by [Seokhyeon Byun](https://www.seokhyeonbyun.com/)_

A modern, responsive conference website built with Next.js for the SuperDARN 2025 Workshop in Roanoke, Virginia.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
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

- Responsive design for all devices
- Easy navigation
- Clear information structure
- Accessible interface
- Virginia Tech brand guidelines compliance
- Optimized performance

## Tech Stack

- **Framework**: Next.js 15 (React)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Custom components with VT brand guidelines
- **Icons**: Lucide React

## Project Structure

```tree
app/
├── abstract/
│   └── page.tsx
├── registration/
│   └── page.tsx
├── travel/
│   └── page.tsx
├── venue/
│   └── page.tsx
├── participants/
│   └── page.tsx
├── layout.tsx
└── page.tsx

components/
├── navbar.tsx
├── hero.tsx
└── footer.tsx

lib/
└── utils.ts

public/
├── images/
    ├── blue-ridge.png
    ├── hotel-roanoke.jpg
    └── other images...
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
- Example: `/public/images/blue-ridge.png` is accessed as `/images/blue-ridge.png` in the code

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

### Client vs Server Components

Next.js 13+ uses React Server Components by default. Understanding which files use "use client" is important:

#### Server Components (Default)

Files without "use client" directive are server components:

```typescript
// app/venue/page.tsx
export default function VenuePage() {
  return <div>Server Component</div>;
}
```

- Better performance
- Smaller client-side JavaScript
- Direct access to backend resources
- Used for: Static pages, data fetching, server-side operations

#### Client Components

Files that need interactivity must use "use client" directive:

```typescript
// components/navbar.tsx
"use client";

import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // ... interactive component code
}
```

- Required for:
  - useState, useEffect hooks
  - onClick handlers
  - Browser APIs
  - Interactive components
- Examples in our project:
  - `components/navbar.tsx` (mobile menu interaction)
  - `components/hero.tsx` (image loading optimization)

This hybrid approach allows us to optimize performance while maintaining interactivity where needed.

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

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The site is configured for static export, making it deployable to any static hosting service:

1. Build the site:

```bash
npm run build
```

2. Deploy the `out` directory to your hosting service of choice (Vercel, Netlify, GitHub Pages, etc.)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
