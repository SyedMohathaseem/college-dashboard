# MUC ORBIT - College Dashboard Management System

A comprehensive college management dashboard built with React, Node.js, Express, and MongoDB.

![MUC ORBIT](https://img.shields.io/badge/MUC-ORBIT-blue)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248)

## 🚀 Features

### Admin Dashboard
- 📊 Overview analytics and statistics
- 👥 Student management (CRUD operations)
- 👨‍🏫 Teacher management
- 📚 Course management
- 📅 Attendance management
- 📢 Announcements

### Teacher Dashboard
- 📋 Class schedule overview
- ✅ Mark student attendance
- 📝 Upload and manage marks
- 📊 View class statistics
- 👤 Profile management

### Student Dashboard
- 📈 Academic performance overview
- 📅 View attendance records
- 📝 View marks and grades
- 🕐 Class timetable
- 🔔 Notifications
- 👤 Profile management

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **Tailwind CSS** - Styling
- **React Router v6** - Navigation
- **Recharts** - Data visualization
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **React Hot Toast** - Notifications
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **express-validator** - Validation

## 📁 Project Structure

```
College Dashboard/
├── client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── context/       # React Context providers
│   │   ├── layouts/       # Dashboard layouts
│   │   ├── pages/         # Page components
│   │   │   ├── admin/     # Admin pages
│   │   │   ├── teacher/   # Teacher pages
│   │   │   └── student/   # Student pages
│   │   ├── services/      # API services
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── server/                 # Node.js Backend
    ├── config/            # Database config
    ├── controllers/       # Route controllers
    ├── middleware/        # Custom middleware
    ├── models/            # Mongoose models
    ├── routes/            # API routes
    ├── seed.js            # Database seeder
    └── server.js          # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd "College Dashboard"
   ```

2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Configure Environment Variables**
   
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/muc-orbit
   JWT_SECRET=your-super-secret-jwt-key-change-this
   JWT_EXPIRES_IN=7d
   CLIENT_URL=http://localhost:3000
   NODE_ENV=development
   ```

5. **Seed the Database**
   ```bash
   cd server
   npm run seed
   ```

6. **Start the Backend**
   ```bash
   npm run dev
   ```

7. **Start the Frontend** (in a new terminal)
   ```bash
   cd client
   npm start
   ```

8. **Open in Browser**
   
   Navigate to `http://localhost:3000`

## 🔐 Demo Credentials

After running the seed script, you can log in with these credentials:

| Role    | Email                                    | Password   |
|---------|------------------------------------------|------------|
| Admin   | admin@mucorbit.com                       | Admin@123  |
| Teacher | john.smith@mucorbit.com                  | Admin@123  |
| Student | alex.anderson@student.mucorbit.com       | Admin@123  |

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/password` - Update password
- `POST /api/auth/logout` - Logout

### Students
- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get single student
- `POST /api/students` - Create student
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student
- `GET /api/students/:id/attendance` - Get student attendance
- `GET /api/students/:id/marks` - Get student marks

### Teachers
- `GET /api/teachers` - Get all teachers
- `GET /api/teachers/:id` - Get single teacher
- `POST /api/teachers` - Create teacher
- `PUT /api/teachers/:id` - Update teacher
- `DELETE /api/teachers/:id` - Delete teacher
- `GET /api/teachers/:id/classes` - Get teacher classes
- `POST /api/teachers/:id/courses` - Assign course

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create course
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course
- `POST /api/courses/:id/enroll` - Enroll student
- `DELETE /api/courses/:id/enroll/:studentId` - Unenroll student

### Attendance
- `GET /api/attendance` - Get all attendance
- `GET /api/attendance/class` - Get class attendance
- `GET /api/attendance/stats` - Get attendance stats
- `POST /api/attendance` - Mark attendance
- `PUT /api/attendance/:id` - Update attendance
- `DELETE /api/attendance/:id` - Delete attendance

### Announcements
- `GET /api/announcements` - Get all announcements
- `GET /api/announcements/:id` - Get single announcement
- `POST /api/announcements` - Create announcement
- `PUT /api/announcements/:id` - Update announcement
- `DELETE /api/announcements/:id` - Delete announcement
- `PATCH /api/announcements/:id/pin` - Toggle pin
- `PATCH /api/announcements/:id/status` - Toggle status

### Dashboard
- `GET /api/dashboard/admin` - Admin dashboard stats
- `GET /api/dashboard/teacher` - Teacher dashboard stats
- `GET /api/dashboard/student` - Student dashboard stats

## 🎨 Theme

The application supports both light and dark modes with a custom color palette:

- **Primary**: Blue (#3b82f6)
- **Accent**: Purple (#8b5cf6)
- **Dark Background**: #1a1d2e

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

MUC ORBIT - College Dashboard Management System

---

Made with ❤️ for educational purposes
