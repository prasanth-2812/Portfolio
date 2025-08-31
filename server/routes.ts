import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import nodemailer from "nodemailer";
import { z } from "zod";

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
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
          await transporter.sendMail(ownerMailOptions);
          await transporter.sendMail(userMailOptions);
        } catch (emailError) {
          console.error('Email sending failed:', emailError);
          // Continue without failing the request
        }
      }
      
      res.json({ success: true, message: 'Message sent successfully!', contact });
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

  const httpServer = createServer(app);
  return httpServer;
}
