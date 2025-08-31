# Kathi Prasanth - Portfolio Website

## Overview

This is an advanced full-stack portfolio website for Kathi Prasanth, a Full Stack Web Developer with B.Tech in Information Technology. The website showcases professional skills in Python, React, Node.js, HTML, CSS, JavaScript, and Machine Learning. Features separate pages with advanced animations, Three.js 3D elements, interactive movable objects, and a fully functional contact form with email notifications. The project uses a monorepo structure with shared TypeScript schemas and is configured for both development and production environments.

## Recent Changes

**August 31, 2025**
- Created separate pages for About, Skills, Projects, and Contact with routing support
- Implemented advanced Framer Motion animations throughout all pages
- Added backend email service using Nodemailer for contact form submissions
- Enhanced Three.js integration with interactive 3D elements on all pages
- Updated navigation system to support multi-page routing with wouter
- Created contact form API endpoint with automatic email notifications to both user and website owner
- Added responsive design improvements and smooth page transitions
- Implemented featured project showcase highlighting ML Phishing Detector
- Enhanced skills section with animated progress bars and interactive cards

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

**Frontend Architecture**
- React 18 with TypeScript using Vite as the build tool
- Component-based architecture with shadcn/ui design system
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query for server state management
- Three.js for 3D graphics and animations
- Tailwind CSS for styling with custom CSS variables
- Dark mode support with theme switching

**Backend Architecture**  
- Express.js server with TypeScript
- Modular route registration system
- Custom error handling middleware
- Request/response logging with performance metrics
- Development-only Vite middleware integration for HMR
- In-memory storage implementation with interface-based design for easy database migration

**Data Layer**
- Drizzle ORM configured for PostgreSQL
- Type-safe schema definitions with Zod validation
- Database migration support through Drizzle Kit
- Shared schema between client and server for type consistency
- Contact messages storage with email notification system
- User entity with username/password fields and UUID primary keys

**Development Environment**
- Replit-optimized configuration with development banner and cartographer support
- Hot Module Replacement (HMR) in development
- TypeScript strict mode with path mapping for clean imports
- ESBuild for production server bundling
- PostCSS with Tailwind and Autoprefixer

**UI Component System**
- Comprehensive shadcn/ui component library with Radix UI primitives
- Consistent design tokens through CSS custom properties
- Responsive design patterns optimized for mobile and desktop
- Interactive animations and transitions
- Form handling with React Hook Form and Zod validation

## External Dependencies

**Database & ORM**
- Neon Database serverless PostgreSQL driver (@neondatabase/serverless)
- Drizzle ORM for type-safe database operations
- connect-pg-simple for PostgreSQL session storage

**Frontend Libraries**
- React ecosystem: React 18, React DOM, React Hook Form
- UI Framework: Radix UI primitives for accessible components
- 3D Graphics: Three.js with TypeScript definitions
- Animation: Framer Motion for advanced page transitions and interactions
- State Management: TanStack React Query for server state management
- Routing: Wouter for lightweight multi-page client-side routing
- Styling: Tailwind CSS with warm color palette and dark theme
- Date Handling: date-fns utility library

**Development Tools**
- Vite with React plugin for fast development and building
- TypeScript with strict configuration
- ESLint and Prettier (implied by project structure)
- Replit-specific plugins for development environment integration
- Nodemailer for email functionality with Gmail SMTP integration

**Build & Deployment**
- Vite for frontend bundling and optimization
- ESBuild for backend bundling in production
- Node.js runtime environment
- Environment variable configuration for database connections