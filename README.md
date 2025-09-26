# SPIRO MULTI ACTIVITIES - Static Website

A clean, minimal React static website for SPIRO MULTI ACTIVITIES CO. LTD - a pharmaceutical supplier and healthcare logistics company.

## Features

- **Single-page static website** - No backend dependencies
- **Responsive design** - Mobile-first approach with Tailwind CSS
- **Contact form** - UI-only form with toast notifications
- **Modern React** - Uses latest React 19 with hooks
- **Minimal dependencies** - Only essential packages included

## Getting Started

### Prerequisites
- Node.js 16 or higher
- npm (comes with Node.js)

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized static files ready for deployment.

## Project Structure

```
/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # UI components (toast only)
│   │   ├── ContactSection.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   └── ...           # Other page sections
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Main page component
│   └── App.js            # Root component
├── package.json          # Dependencies
└── tailwind.config.js    # Tailwind CSS config
```

## Dependencies

**Core:**
- React 19 - UI library
- Tailwind CSS - Styling
- Lucide React - Icons

**UI Components:**
- Radix UI Toast - Notification system
- Class Variance Authority - CSS utilities

**Build Tools:**
- React Scripts - Build tooling
- PostCSS & Autoprefixer - CSS processing

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

## Customization

- **Colors & Styling**: Edit `tailwind.config.js` and component styles
- **Content**: Update text and information in component files
- **Contact Info**: Modify contact details in `ContactSection.jsx`
- **Branding**: Update logo and company info in `Header.jsx`

## Deployment

After running `npm run build`, you can deploy the `build` folder to any static hosting service:

- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your repository
- **GitHub Pages**: Upload build contents
- **Any web server**: Serve the build folder as static files

## License

Private project for SPIRO MULTI ACTIVITIES CO. LTD