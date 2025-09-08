#!/usr/bin/env node

/**
 * Database Setup Script
 * This script helps you set up your database tables
 */

import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";
import { migrate } from "drizzle-orm/neon-serverless/migrator";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

async function setupDatabase() {
  console.log("🗄️  Setting up database...");
  
  if (!process.env.DATABASE_URL) {
    console.error("❌ Error: DATABASE_URL environment variable is required");
    console.log("Please set your DATABASE_URL in your .env file or environment variables");
    process.exit(1);
  }

  try {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const db = drizzle(pool);

    console.log("📡 Connecting to database...");
    
    // Test the connection
    await pool.query("SELECT 1");
    console.log("✅ Database connection successful!");

    console.log("📋 Running database migrations...");
    await migrate(db, { migrationsFolder: "./migrations" });
    
    console.log("✅ Database setup complete!");
    console.log("");
    console.log("Your database is ready to use!");
    console.log("You can now deploy your portfolio to Vercel.");
    
    await pool.end();
  } catch (error) {
    console.error("❌ Database setup failed:", error.message);
    process.exit(1);
  }
}

setupDatabase();
