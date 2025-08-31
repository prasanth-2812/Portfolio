# Kathi Prasanth Portfolio Website - Local Setup

## Prerequisites

Before running this project locally, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git** (optional, for version control)

## Installation Steps

1. **Extract the Project**
   ```bash
   tar -xzf portfolio-website.tar.gz
   cd portfolio-website/
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup (Optional - for Email Functionality)**
   
   Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```
   
   Add your email credentials to the `.env` file:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   ```
   
   **Note:** To get a Gmail App Password:
   - Go to Google Account Settings
   - Enable 2-factor authentication
   - Go to Security > App passwords
   - Generate a new app password for "Mail"
   - Use that 16-character password as EMAIL_PASS

4. **Start the Development Server**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   
   Open your browser and navigate to: `http://localhost:5000`

## Project Structure

```
portfolio-website/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Individual pages (About, Skills, etc.)
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility libraries
├── server/                 # Backend Express server
├── shared/                 # Shared TypeScript schemas
├── package.json           # Dependencies and scripts
└── vite.config.ts         # Vite configuration
```

## Features

- ✅ Multi-page portfolio with smooth routing
- ✅ Advanced animations with Framer Motion
- ✅ Interactive 3D elements with Three.js
- ✅ Contact form with email notifications
- ✅ Responsive design with dark theme
- ✅ Professional skills showcase
- ✅ Featured projects section

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Troubleshooting

**Port Already in Use:**
If port 5000 is already in use, the application will automatically try the next available port.

**Email Not Working:**
Email functionality requires proper Gmail credentials in the `.env` file. The website will work without email setup, but contact form submissions won't send emails.

**Build Issues:**
Make sure you're using Node.js version 18 or higher:
```bash
node --version
```

## Deployment

For production deployment, you can use platforms like:
- Vercel
- Netlify
- Railway
- Heroku

Build the project first:
```bash
npm run build
```

## Support

If you encounter any issues during setup, please check:
1. Node.js version compatibility
2. All dependencies are installed
3. Environment variables are set correctly (if using email features)

Enjoy your new portfolio website! 🚀