# TrackiT - Ticket Management System

TrackiT is a modern, responsive ticket management system built with Next.js and React. It provides a clean and intuitive interface for managing support tickets, with features like real-time updates, responsive design, and a smooth user experience.

## 🛠️ Technologies and Libraries

### Core Framework

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety and developer experience

### UI and Styling

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible and customizable UI components
- **Lucide React** - Beautiful icons
- **class-variance-authority** - Component variants management
- **tailwind-merge** - Tailwind class merging utilities

### Form and Validation

- **React Hook Form** - Form state management and validation
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### State Management and Data Handling

- **Zustand** - Lightweight state management
- **date-fns** - Date manipulation library

### Notifications

- **Sonner** - Toast notifications

## 🚀 Setup and Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Lansa-18/hng-ticket-system-react.git
   cd hng-ticket-system-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 🏗️ Project Structure

```
ticket-system-react/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard and ticket management pages
│   └── auth/             # Authentication pages
├── components/            # Reusable UI components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard components
│   └── ui/              # Shared UI components
├── lib/                  # Utilities and services
└── public/              # Static assets
```

## 🎯 Features and Components

### Authentication

- **Login/Signup Forms**: Secure authentication with form validation
- **Protected Routes**: Route protection using custom auth provider
- **Persistent Sessions**: Local storage based session management

### Dashboard

- **Overview Stats**: Quick view of ticket statistics
- **Ticket Management**: CRUD operations for tickets
- **Status Tracking**: Visual status indicators (Open, In Progress, Closed)
- **Responsive Layout**: Mobile-first design approach

### Components Structure

- **AuthCard**: Wrapper for authentication forms
- **TicketCard**: Display individual ticket information
- **TicketDialog**: Modal for creating/editing tickets
- **DashboardHeader**: Navigation and user controls

## 🔐 Authentication and State

### Auth Provider

- Manages user authentication state
- Provides login, signup, and logout functionality
- Persists user session in localStorage

### Ticket State Management

- Local storage-based ticket data persistence
- Real-time updates using React state
- Optimistic UI updates for better UX

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus management in dialogs
- Screen reader friendly status messages

## 🧪 Test User Credentials

```
Email: demo@example.com
Password: password123
```

Built using Next.js and React
