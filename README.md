# MERN Stack Blog Application

A full-stack blog application built with MongoDB, Express.js, React.js, and Node.js. Features include user authentication, CRUD operations for blog posts, categories, search functionality, pagination, comments, and password reset functionality.

## 🚀 Live Demo

[View Live Application](https://blogapp-p3g08g1y9-brian-kirops-projects.vercel.app/)


## 🌟 Features

### Core Features
- ✅ **User Authentication** - Register, login, logout, and JWT-based authentication
- ✅ **Password Reset** - Forgot password and reset password via email
- ✅ **Blog Post Management** - Create, read, update, and delete posts
- ✅ **Categories** - Organize posts by categories
- ✅ **Comments** - Users can comment on blog posts
- ✅ **Search & Filter** - Full-text search and category filtering
- ✅ **Pagination** - Efficient handling of large datasets
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Protected Routes** - Secure routes requiring authentication
- ✅ **Rich Text Content** - Support for multi-paragraph posts
- ✅ **Post Statistics** - View counts and timestamps
- ✅ **File Uploads** - Support for featured images and user avatars

### Advanced Features
- 🔒 **Authorization** - Users can only edit/delete their own posts and comments
- 📊 **Real-time Validation** - Input validation on both client and server
- 🎨 **Modern UI** - Clean, professional interface with Tailwind CSS
- 📱 **Mobile Responsive** - Seamless experience across devices
- ⚡ **Optimistic Updates** - Fast UI feedback
- 🔍 **SEO Friendly** - Semantic HTML and proper meta tags
- 📧 **Email Notifications** - Password reset emails via SMTP
- 🗂️ **Database Seeding** - Seed script for initial data

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with hooks
- **React Router v6** - Client-side routing
- **Axios** - HTTP client for API calls
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server
- **Context API** - State management for authentication
- **Custom Hooks** - Reusable logic for API calls and authentication
- **ESLint** - Code linting
- **Vitest** - Unit testing framework

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB with schema validation
- **bcrypt.js** - Password hashing with salt rounds
- **jsonwebtoken** - JWT authentication
- **express-validator** - Server-side input validation
- **cors** - Cross-origin resource sharing
- **multer** - File upload handling
- **nodemailer** - Email sending for password reset
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **MongoDB** (v6 or higher) - Local installation OR MongoDB Atlas account
- **Git** (for cloning the repository)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/mern-stack-integration-Bkirop.git
cd mern-blog
```

### 2. Setup Backend (Server)

```bash
cd server

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your configuration
# Required: MONGODB_URI, JWT_SECRET
# For email features: EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_FROM, FRONTEND_URL
nano .env
```

**Environment Variables (.env):**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-blog
JWT_SECRET=your-super-secret-jwt-key-min-32-chars

# Email Configuration (for password reset)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
FRONTEND_URL=http://localhost:5173
```

### 3. Setup Frontend (Client)

```bash
cd ../client

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

**Environment Variables (.env):**
```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
Server will run on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```
Client will run on http://localhost:5173

### 5. Seed Database (Optional)

Add sample data to your database:

```bash
cd server
npm run seed
```

**Test Account:**
- Email: admin@example.com
- Password: password123

## 📁 Project Structure

```
mern-blog/
├── server/                    # Backend application
│   ├── src/
│   │   ├── config/           # Database and email configuration
│   │   ├── controllers/      # Route controllers (auth, posts, categories, comments)
│   │   ├── middleware/       # Custom middleware (auth, error handling)
│   │   ├── models/           # Mongoose models (User, Post, Comment, Category)
│   │   ├── routes/           # API routes (auth, posts, categories, comments)
│   │   ├── validators/       # Input validation schemas
│   │   ├── server.js         # Entry point with middleware and routes
│   │   └── seed.js           # Database seeding script
│   ├── uploads/              # File uploads directory
│   ├── .env                  # Environment variables
│   └── package.json
│
├── client/                    # Frontend application
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── layout/      # Layout components (Layout, Navbar, Footer)
│   │   │   ├── posts/       # Post components (PostCard, PostDetail, PostForm, PostList)
│   │   │   ├── auth/        # Authentication components (Login, Register, ProtectedRoute)
│   │   │   └── common/      # Shared components (ErrorMessage, Loading)
│   │   ├── context/         # React Context (AuthContext)
│   │   ├── hooks/           # Custom React hooks (useApi, useAuth)
│   │   ├── pages/           # Page components (Home, CreatePost, EditPost, etc.)
│   │   ├── services/        # API services (api.js, authService.js)
│   │   ├── App.jsx          # Root component with routing
│   │   └── main.jsx         # Entry point
│   ├── public/
│   ├── .env
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |
| POST | `/api/auth/forgot-password` | Request password reset | No |
| POST | `/api/auth/reset-password` | Reset password with token | No |

### Posts
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/posts` | Get all posts (paginated) | No |
| GET | `/api/posts/:id` | Get single post | No |
| POST | `/api/posts` | Create new post | Yes |
| PUT | `/api/posts/:id` | Update post | Yes (Owner) |
| DELETE | `/api/posts/:id` | Delete post | Yes (Owner) |

### Categories
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/categories` | Get all categories | No |
| POST | `/api/categories` | Create category | Yes (Admin) |

### Comments
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/comments/:postId` | Get comments for a post | No |
| POST | `/api/comments` | Create comment | Yes |
| DELETE | `/api/comments/:id` | Delete comment | Yes (Owner) |

## 🎯 Usage Guide

### Register a New User
1. Navigate to http://localhost:5173
2. Click "Register" in the navigation bar
3. Fill in username, email, and password
4. Click "Register" button
5. You'll be automatically logged in and redirected to the home page

### Create a Blog Post
1. Log in to your account
2. Click "Create Post" in the navigation bar
3. Fill in the post details:
   - Title (required)
   - Content (required)
   - Excerpt (optional)
   - Category (required)
   - Tags (optional, comma-separated)
   - Featured Image (optional)
   - Status (draft or published)
4. Click "Create Post"
5. Your post will appear on the home page

### Search and Filter Posts
1. Use the search bar on the home page to search posts by title or content
2. Use the category dropdown to filter posts by category
3. Navigate through pages using pagination controls

### Edit or Delete Your Posts
1. Click on a post to view its details
2. If you're the author, you'll see "Edit" and "Delete" buttons
3. Click "Edit" to modify the post
4. Click "Delete" to remove the post (requires confirmation)

### Password Reset
1. Click "Forgot Password" on the login page
2. Enter your email address
3. Check your email for the reset link
4. Click the link to reset your password
5. Enter your new password

### Commenting on Posts
1. Log in to your account
2. Navigate to any published post
3. Scroll to the comments section
4. Enter your comment and submit
5. You can delete your own comments

## 🧪 Testing

### Test API Endpoints

**Register User:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

**Get All Posts:**
```bash
curl http://localhost:5000/api/posts
```

**Create Post (requires authentication):**
```bash
curl -X POST http://localhost:5000/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "My First Post",
    "content": "This is my first blog post!",
    "category": "CATEGORY_ID",
    "status": "published"
  }'
```

### Running Frontend Tests
```bash
cd client
npm test
```

## 🚀 Deployment

### Backend Deployment (Render)

1. Push your code to GitHub
2. Go to [Render](https://render.com)
3. Create a new Web Service
4. Connect your GitHub repository
5. Configure:
   - **Build Command:** `cd server && npm install`
   - **Start Command:** `cd server && npm start`
   - **Environment Variables:** Add all from `.env`

### Frontend Deployment (Netlify)

1. Update `.env.production`:
```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

2. Build the project:
```bash
cd client
npm run build
```

3. Deploy to Netlify:
   - Option 1: Drag and drop the `dist` folder
   - Option 2: Connect GitHub repository
   - Build command: `cd client && npm run build`
   - Publish directory: `client/dist`

### Environment Variables for Production

**Backend (.env):**
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mern-blog
JWT_SECRET=your-production-secret-key-min-32-chars
NODE_ENV=production

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
FRONTEND_URL=https://your-frontend-url.netlify.app
```

**Frontend (.env.production):**
```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

## 🔒 Security Features

- **Password Hashing** - bcrypt with salt rounds for secure password storage
- **JWT Authentication** - Secure token-based authentication with expiration
- **Input Validation** - Server-side validation with express-validator
- **Protected Routes** - Authorization checks on sensitive endpoints
- **CORS Configuration** - Restricted cross-origin requests
- **Environment Variables** - Sensitive data stored securely
- **Error Handling** - Custom error handling middleware
- **Rate Limiting** - Protection against brute force attacks (can be added)
- **File Upload Security** - Multer configuration for safe file uploads

## 🐛 Troubleshooting

### MongoDB Connection Issues

**Error: MongoNetworkError**
```bash
# Check if MongoDB is running
sudo systemctl status mongod  # Linux
brew services list             # Mac

# Start MongoDB
sudo systemctl start mongod    # Linux
brew services start mongodb-community  # Mac
```

**Solution:** Use MongoDB Atlas if local MongoDB fails

### Port Already in Use

**Error: EADDRINUSE**
```bash
# Find process using port 5000
lsof -i :5000  # Mac/Linux
netstat -ano | findstr :5000  # Windows

# Kill the process or change PORT in .env
```

### CORS Errors

**Error: Access-Control-Allow-Origin**
- Verify proxy configuration in `vite.config.js`
- Check CORS settings in `server.js`
- Ensure API URL is correct in client `.env`

### Email Configuration Issues

**Error: Authentication failed**
- For Gmail: Enable 2FA and generate an App Password
- Use the App Password (not your regular password) in EMAIL_PASS
- Check EMAIL_HOST, EMAIL_PORT, EMAIL_SECURE settings

### JWT Token Issues

**Error: jwt malformed**
- Ensure JWT_SECRET is set and matches between requests
- Check token expiration (default: 30 days)
- Verify token is being sent in Authorization header as "Bearer TOKEN"

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [MongoDB](https://www.mongodb.com/) for the database
- [Express.js](https://expressjs.com/) for the web framework
- [React](https://reactjs.com/) for the UI library
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for the build tool
