# Cloud-Based Task Manager (MERN)

A modern web application built with the MERN stack for efficient team task management and collaboration.

## Overview

The Cloud-Based Task Manager is a comprehensive solution designed to streamline team task management in modern work environments. It provides a user-friendly interface for task assignment, tracking, and collaboration, catering to both administrators and regular users.

### Key Features

#### Admin Features
- User management and team member administration
- Task assignment and status updates
- Priority-based task management
- Asset management for tasks
- User account control

#### User Features
- Task status management
- Detailed task information viewing
- Task activity communication

#### General Features
- Secure authentication and authorization
- Profile management
- Password management
- Interactive dashboard with task filtering

## Tech Stack

### Frontend
- React (Vite)
- Redux Toolkit for State Management
- Headless UI
- Tailwind CSS

### Backend
- Node.js with Express.js

### Database
- MongoDB

## Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas account
- npm or yarn package manager

### Environment Setup

#### Server (.env)
```
MONGODB_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=8800
NODE_ENV=development
```

#### Client (.env)
```
VITE_APP_BASE_URL=http://localhost:8800
VITE_APP_FIREBASE_API_KEY=your_firebase_api_key
```

### Installation

1. Clone the repository
2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```
3. Install client dependencies:
   ```bash
   cd client
   npm install
   ```

### Running the Application

1. Start the server:
   ```bash
   cd server
   npm start
   ```
2. Start the client:
   ```bash
   cd client
   npm start
   ```

The application will be available at `http://localhost:3000`

## Support

For support, contact:
- Email: codewavewithasante@gmail.com
- Telegram: [https://t.me/Codewave_with_asante](https://t.me/Codewave_with_asante)