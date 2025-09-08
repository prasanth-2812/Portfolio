# 🚀 Portfolio Deployment Guide

## Free Services Used:
- **Vercel** - Hosting (Frontend + Backend)
- **Neon** - PostgreSQL Database (Free tier)
- **Gmail SMTP** - Email service (Free)

## Step 1: Database Setup (Neon PostgreSQL)

1. Go to [neon.tech](https://neon.tech) and sign up for free
2. Create a new project called "prasanth-portfolio"
3. Copy the connection string (it will look like: `postgresql://username:password@host/database`)

## Step 2: Email Setup (Gmail SMTP)

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to Security → App passwords
   - Select "Mail" and generate a password
   - Use this password (not your regular Gmail password)

## Step 3: Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Import your GitHub repository
4. Add these environment variables in Vercel dashboard:

### Environment Variables:
```
DATABASE_URL=postgresql://username:password@host/database
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=production
```

## Step 4: Database Migration

After deployment, run the database migration:
```bash
npm run db:push
```

## Step 5: Test Your Deployment

1. Visit your deployed URL
2. Test the contact form
3. Check if emails are being sent
4. Verify database storage

## Troubleshooting:

### Contact Form Not Working:
- Check if DATABASE_URL is set correctly
- Verify EMAIL_USER and EMAIL_PASS are correct
- Check Vercel function logs

### Database Connection Issues:
- Ensure DATABASE_URL is properly formatted
- Check if Neon database is active
- Verify network connectivity

### Email Issues:
- Use App Password, not regular password
- Enable 2FA on Gmail
- Check spam folder for test emails

## Cost Breakdown:
- **Vercel**: Free (Hobby plan)
- **Neon**: Free (0.5GB storage, 10GB transfer)
- **Gmail**: Free (15GB storage)
- **Total Cost**: $0/month

## Features Included:
✅ Responsive React Portfolio
✅ Contact Form with Database Storage
✅ Email Notifications
✅ 3D Animations (Three.js)
✅ Modern UI (Tailwind CSS)
✅ TypeScript Support
✅ SEO Optimized
✅ Fast Loading
