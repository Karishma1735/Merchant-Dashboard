# Merchant Ops Dashboard - React + Vite

A merchant operations dashboard built with React, Vite, and JavaScript.

## Project Structure

```
src/
├── assets/          # Static assets and icons
├── components/
│   ├── common/      # Reusable UI components (Button, Input, Modal, etc.)
│   ├── layout/      # Layout components (Sidebar, Topbar, Layout)
│   ├── merchants/   # Merchant-specific components
│   └── dashboard/   # Dashboard-specific components
├── data/            # Mock data and data management
├── pages/           # Page components (Dashboard, Merchants)
├── utils/           # Utility functions
├── hooks/           # Custom React hooks
├── styles/          # Global styles
├── App.jsx          # Main App component
└── main.jsx         # Entry point
```

## Features

- Merchant management dashboard
- Search, filter, and sort merchants
- Add, edit, and view merchant details
- Dashboard with summary cards and charts
- Responsive design with Tailwind CSS
- Dark mode support (via CSS variables)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Technology Stack

- React 18.3
- Vite 5.2
- Tailwind CSS 4.1
- Lucide React (Icons)
- Recharts (Charts)

## Development

- ESLint for code linting
- PostCSS for CSS processing
- Autoprefixer for CSS vendor prefixes
