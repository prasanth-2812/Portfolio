import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import nodemailer from "nodemailer";
import { z } from "zod";

// Email configuration
const createTransporter = () => {
  console.log('Email configuration:', {
    user: process.env.EMAIL_USER ? 'Set' : 'Not set',
    pass: process.env.EMAIL_PASS ? 'Set' : 'Not set'
  });
  
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false
    }
  });
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact message
      const contact = await storage.createContact(validatedData);
      
      // Send email notifications if email credentials are configured
      let emailSent = false;
      let emailError = null;
      
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = createTransporter();
        
        // Email to website owner
        const ownerMailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `New Contact Form Submission: ${validatedData.subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          `,
        };
        
        // Auto-reply email to user
        const userMailOptions = {
          from: process.env.EMAIL_USER,
          to: validatedData.email,
          subject: 'Thank you for contacting Kathi Prasanth',
          html: `
            <h2>Thank you for your message!</h2>
            <p>Hi ${validatedData.name},</p>
            <p>Thank you for reaching out. I have received your message and will get back to you as soon as possible.</p>
            <p><strong>Your message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
            <br>
            <p>Best regards,</p>
            <p>Kathi Prasanth</p>
            <p>Full Stack Developer</p>
          `,
        };
        
        try {
          console.log('Attempting to send emails...');
          
          // Verify the connection first
          await transporter.verify();
          console.log('Email connection verified successfully');
          
          await transporter.sendMail(ownerMailOptions);
          console.log('Owner notification email sent successfully');
          await transporter.sendMail(userMailOptions);
          console.log('User auto-reply email sent successfully');
          emailSent = true;
        } catch (emailError: any) {
          console.error('Email sending failed:', emailError);
          console.error('Email error details:', {
            message: emailError?.message || 'Unknown error',
            code: emailError?.code || 'Unknown code',
            response: emailError?.response || 'No response',
            command: emailError?.command || 'No command',
            responseCode: emailError?.responseCode || 'No response code'
          });
          console.error('Full error object:', JSON.stringify(emailError, null, 2));
          emailError = emailError;
        }
      } else {
        console.log('Email credentials not configured, skipping email sending');
        emailError = new Error('Email credentials not configured');
      }
      
      // Return appropriate response based on email status
      if (emailSent) {
        res.json({ 
          success: true, 
          message: 'Message sent successfully! You will receive a confirmation email shortly.', 
          contact,
          emailSent: true
        });
      } else {
        res.json({ 
          success: false, 
          message: 'Message received but email notification failed. Please try again or contact directly.', 
          contact,
          emailSent: false,
          emailError: emailError?.message || 'Email sending failed'
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: 'Invalid form data', errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: 'Internal server error' });
      }
    }
  });
  
  // Get all contacts (admin endpoint)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error('Get contacts error:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

  // Test email configuration endpoint
  app.get("/api/test-email", async (req, res) => {
    try {
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        return res.json({ 
          success: false, 
          message: 'Email credentials not configured',
          configured: false
        });
      }

      console.log('Testing email configuration...');
      console.log('Email user:', process.env.EMAIL_USER);
      console.log('Email pass length:', process.env.EMAIL_PASS?.length);

      const transporter = createTransporter();
      
      // Test email
      const testMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Email Configuration Test',
        html: `
          <h2>Email Configuration Test</h2>
          <p>This is a test email to verify that your email configuration is working correctly.</p>
          <p>If you receive this email, your contact form emails should work properly.</p>
          <p>Timestamp: ${new Date().toISOString()}</p>
        `,
      };

      console.log('Verifying email connection...');
      // Verify the connection first
      await transporter.verify();
      console.log('Email connection verified successfully');
      
      console.log('Sending test email...');
      await transporter.sendMail(testMailOptions);
      console.log('Test email sent successfully');
      
      res.json({ 
        success: true, 
        message: 'Test email sent successfully! Check your inbox.',
        configured: true
      });
    } catch (error: any) {
      console.error('Email test error:', error);
      console.error('Error details:', {
        message: error.message,
        code: error.code,
        response: error.response,
        command: error.command,
        responseCode: error.responseCode
      });
      res.json({ 
        success: false, 
        message: `Email test failed: ${error.message}`,
        configured: true,
        error: error.message,
        errorCode: error.code
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
