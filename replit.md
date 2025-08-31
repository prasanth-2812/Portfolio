# Portfolio Website

## Overview

This is a modern full-stack portfolio website built with React/TypeScript frontend and Express.js backend. The application showcases a personal portfolio with interactive 3D elements, responsive design, and professional presentation of skills, projects, and contact information. The project uses a monorepo structure with shared TypeScript schemas and is configured for both development and production environments.

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
- Animation: Class Variance Authority for component variants
- State Management: TanStack React Query
- Routing: Wouter for lightweight client-side routing
- Styling: Tailwind CSS with custom configuration
- Date Handling: date-fns utility library

**Development Tools**
- Vite with React plugin for fast development and building
- TypeScript with strict configuration
- ESLint and Prettier (implied by project structure)
- Replit-specific plugins for development environment integration

**Build & Deployment**
- Vite for frontend bundling and optimization
- ESBuild for backend bundling in production
- Node.js runtime environment
- Environment variable configuration for database connections