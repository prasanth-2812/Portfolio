# Kathi Prasanth - Portfolio Website

A modern, full-stack portfolio website showcasing skills in Python, React, Node.js, HTML, CSS, JavaScript, and Machine Learning.

## 🚀 Features

- **Multi-Page Experience**: Separate pages for About, Skills, Projects, and Contact
- **Advanced Animations**: Smooth Framer Motion transitions throughout
- **3D Elements**: Interactive Three.js components on every page
- **Email Integration**: Working contact form with automatic notifications
- **Featured Projects**: Highlighting ML Phishing Detector and other work
- **Responsive Design**: Dark theme with warm color palette
- **Modern Stack**: React, TypeScript, Express.js, and more

## 🛠️ Tech Stack

**Frontend:**
- React 18 with TypeScript
- Framer Motion for animations
- Three.js for 3D graphics
- Tailwind CSS for styling
- Wouter for routing
- TanStack Query for state management

**Backend:**
- Express.js with TypeScript
- Nodemailer for email functionality
- Drizzle ORM with PostgreSQL
- Zod for validation

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/prasanth-2812/PrasanthPortfolio.git
   cd PrasanthPortfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (optional - for email functionality):
   ```bash
   cp .env.example .env
   # Edit .env with your email credentials
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5000`

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## 🌟 Project Structure

```
PrasanthPortfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Individual pages
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility libraries
├── server/                 # Backend Express server
├── shared/                 # Shared TypeScript schemas
└── package.json           # Dependencies and scripts
```

## 🚀 Deployment

The project is ready for deployment on platforms like:
- Vercel
- Netlify
- Railway
- Heroku

Build the project first:
```bash
npm run build
```

## 📧 Contact

**Kathi Prasanth**
- Email: kathi.prasanth@email.com
- LinkedIn: [linkedin.com/in/kathi-prasanth](https://linkedin.com/in/kathi-prasanth)
- GitHub: [github.com/kathi-prasanth](https://github.com/kathi-prasanth)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **Star this repository if you found it helpful!**