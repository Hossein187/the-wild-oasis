# The Wild Oasis - Cabin Management Application

**The Wild Oasis** is a full-featured cabin booking platform that allows users to browse, book, and manage cabin accommodations. Built with modern React and TypeScript, it provides a complete end-to-end solution for cabin rental businesses.

## 🎯 Project Overview

The Wild Oasis offers:

- Browse & Search: Search cabins by type, capacity, price range, and availability
- Booking System: Book cabins for specific date ranges with real-time availability
- User Management: Secure authentication with email/password and password recovery
- Admin Dashboard: Comprehensive management interface for cabin owners
- Analytics: Revenue and occupancy tracking with detailed charts
- Review System: Guest reviews and ratings for each cabin
- Real-time Check-in/Check-out: Streamlined arrival/departure process

## 🛠️ Tech Stack

**Frontend**:
- React 19 with TypeScript
- Vite for development and build
- @tanstack/react-query for data fetching
- React Router for navigation
- styled-components for styling
- React Hook Form for form validation
- React Hot Toast for notifications

**Backend**:
- Supabase (PostgreSQL + Storage)
- Real-time database sync
- Secure file uploads for cabin images
- Role-based access control

**Additional Libraries**:
- date-fns (date formatting)
- recharts (data visualization)
- React Icons (icon library)
- React Error Boundary (error handling)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Supabase account with a PostgreSQL database

### Installation

1. Clone the repository:
   git clone https://github.com/YOUR_USERNAME/the-wild-oasis.git
   cd the-wild-oasis

2. Install dependencies:
   npm install

3. Set up Supabase:
   - Create a Supabase project
   - Copy the .env.example to .env.local in the project root
   - Update Supabase URL, anon key, and service role key

4. Set up database schema:
   The project includes:
   - cabins table with cabin details and image URLs
   - guests table with guest information
   - bookings table with reservation data
   - users table for authentication

5. Upload initial data (optional but recommended):

6. Start the development server:
   npm run dev

### Production Build

npm run build

## 📚 Features

### Core Features

#### Cabin Management
- View all available cabins in a grid/list layout
- Filter cabins by capacity, price, and type
- Sort cabins by various criteria
- Click to view detailed cabin information
- Book cabins directly from the listing page

#### Booking System
- Select dates and check real-time availability
- View pricing based on date ranges
- Add guests to bookings
- Apply discount codes
- Instant booking confirmation
- Generate booking reference numbers

#### User Authentication
- Email/password sign-up and login
- Password recovery with email
- Update user profile information
- Avatar management
- Protected routes for authenticated users

#### Admin Dashboard
- Overview of bookings, revenue, and occupancy
- Quick access to cabin management
- User management interface
- Settings and configuration
- Real-time statistics and charts

#### Analytics
- Revenue charts showing monthly trends
- Occupancy rate visualization
- Booking statistics by cabin type
- Guest demographics analysis

### Advanced Features

#### Check-in/Check-out
- Streamlined arrival/departure process
- Digital key management
- Guest information updates
- Payment processing (if integrated)

#### Reviews & Ratings
- Leave reviews after stays
- Rate cleanliness, location, service
- View average ratings and reviews
- Moderate reviews for inappropriate content

#### Responsive Design
- Mobile-first approach
- Touch-friendly interfaces
- Adaptive navigation
- Cross-browser compatible

## 🏗️ Project Structure

/src
├── /pages                    # Main page components
├── /features                 # Feature-specific modules
│   ├── /cabins              # Cabin management
│   ├── /bookings            # Booking system
│   ├── /authentication      # User auth
│   ├── /check-in-out       # Check-in/check-out
│   └── /dashboard          # Analytics and overview
├── /ui                       # UI components
├── /styles                   # Global styles
├── /services                 # API integrations
├── /hooks                    # Custom hooks
└── /data                     # Initial data

## 🔧 Configuration

### Environment Variables

Create a .env.local file in the project root:
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

### ESLint Configuration

The project uses ESLint for code quality. Run linting:
npm run lint

### Development Tools

- React Query Devtools: View API requests/responses
- Browser DevTools: Debug and optimize performance
- ESLint: Code quality and type safety

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests (if applicable)
5. Run npm run lint to ensure code quality
6. Commit your changes
7. Push to your branch
8. Create a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Credits

- Supabase: Backend-as-a-Service
- Vite: Fast development server and build tool
- React: JavaScript library for building user interfaces
- TypeScript: Typed JavaScript
- styled-components: CSS-in-JS styling
- Heroicons: Icon library
- Date-fns: Date manipulation library

## 🆘 Support

For issues and questions:
- Check the GitHub Issues
- Visit the project's documentation (if available)
- Join the community (if applicable)

## 🔄 Version Control

This project uses Git with semantic versioning. For detailed commit history, see the GitHub repository.
