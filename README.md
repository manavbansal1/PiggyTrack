# 🐷 PiggyTrack

A modern, full-stack personal finance tracking application built with React Native (Expo) and Node.js. Track your income, expenses, and manage your financial goals with an intuitive mobile interface.

## ✨ Features

### 📱 Mobile App (React Native + Expo)
- **User Authentication** - Secure login/signup with Clerk
- **Transaction Management** - Add, view, and delete financial transactions
- **Category System** - Organize transactions by categories (Food, Shopping, Transportation, etc.)
- **Balance Tracking** - Real-time balance, income, and expense calculations
- **Pull-to-Refresh** - Refresh data with a simple pull gesture
- **Responsive Design** - Beautiful UI with coffee-themed color scheme
- **Cross-Platform** - Works on iOS, Android, and Web

### 🚀 Backend API (Node.js + Express)
- **RESTful API** - Clean API endpoints for transaction management
- **Database Integration** - PostgreSQL with Neon Database
- **Rate Limiting** - Upstash Redis for API protection
- **CORS Support** - Cross-origin resource sharing enabled
- **Health Monitoring** - API health check endpoints
- **Automated Tasks** - Cron jobs for maintenance

## 🏗️ Architecture

```
PiggyTrack/
├── mobile/                 # React Native Expo app
│   ├── app/               # App router structure
│   │   ├── (auth)/        # Authentication screens
│   │   └── (root)/        # Main app screens
│   ├── components/        # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── assets/           # Images and styles
│   └── constants/        # App constants and config
└── backend/              # Node.js API server
    ├── src/
    │   ├── routes/       # API route handlers
    │   ├── config/       # Database and service configs
    │   └── middleware/   # Custom middleware
    └── package.json
```

## 🛠️ Tech Stack

### Frontend (Mobile)
- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **Expo Router** - File-based routing
- **Clerk** - Authentication and user management
- **React Native Vector Icons** - Icon library
- **React Native Keyboard Aware Scroll View** - Better keyboard handling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **PostgreSQL** - Primary database (Neon)
- **Upstash Redis** - Rate limiting and caching
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- PostgreSQL database (or Neon account)
- Clerk account for authentication

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PiggyTrack/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the backend directory:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   PORT=5001
   NODE_ENV=development
   ```

4. **Start the server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

### Mobile App Setup

1. **Navigate to mobile directory**
   ```bash
   cd ../mobile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Clerk**
   - Get your publishable key from [Clerk Dashboard](https://dashboard.clerk.com/)
   - Update `app/_layout.tsx` with your key:
   ```tsx
   <ClerkProvider publishableKey="pk_test_your_key_here">
   ```

4. **Configure API URL**
   - Update `constants/api.js` with your backend URL
   - For development: `http://localhost:5001/api`
   - For production: `https://your-backend-url.com/api`

5. **Start the app**
   ```bash
   # Start Expo development server
   npm start
   
   # Run on specific platform
   npm run ios
   npm run android
   npm run web
   ```

## 📱 App Screens

### Authentication
- **Sign In** - Email/password login
- **Sign Up** - User registration with email verification

### Main App
- **Dashboard** - Overview of balance, recent transactions
- **Add Transaction** - Create new income/expense entries
- **Transaction List** - View all transactions with pull-to-refresh

## 🔧 API Endpoints

### Transactions
- `GET /api/transactions/:userId` - Get user transactions
- `POST /api/transactions` - Create new transaction
- `DELETE /api/transactions/:id` - Delete transaction
- `GET /api/transactions/summary/:userId` - Get financial summary

### Health
- `GET /api/health` - API health check

## 🎨 Design System

### Color Themes
The app supports multiple color themes:
- **Coffee Theme** (Default) - Warm browns and creams
- **Forest Theme** - Natural greens
- **Purple Theme** - Rich purples
- **Ocean Theme** - Cool blues

### Categories
- 🍔 Food & Drinks
- 🛒 Shopping
- 🚗 Transportation
- 🎬 Entertainment
- 📄 Bills
- 💰 Income
- ➕ Other

## 🔒 Security Features

- **JWT Authentication** via Clerk
- **Rate Limiting** to prevent API abuse
- **Input Validation** on all forms
- **Secure Database** connections
- **CORS Protection**

## 📊 Database Schema

### Transactions Table
```sql
CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR NOT NULL,
  title VARCHAR NOT NULL,
  amount DECIMAL NOT NULL,
  category VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🚀 Deployment

### Backend (Render/Heroku)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Mobile App
1. **Expo Build Service**
   ```bash
   expo build:android
   expo build:ios
   ```

2. **App Store/Play Store**
   - Follow Expo's deployment guide
   - Configure app signing certificates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [Clerk](https://clerk.com/) for authentication services
- [Neon](https://neon.tech/) for PostgreSQL hosting
- [Upstash](https://upstash.com/) for Redis services

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Contact the development team

---

**Happy Tracking! 🐷💰**
