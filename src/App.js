import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';

// Auth Pages
import Login from './pages/auth/Login';

// Admin Pages
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminStudents from './pages/admin/Students';
import AdminTeachers from './pages/admin/Teachers';
import AdminCourses from './pages/admin/Courses';
import AdminSchedule from './pages/admin/Schedule';
import AdminFees from './pages/admin/Fees';
import AdminReports from './pages/admin/Reports';
import AdminNotifications from './pages/admin/Notifications';
import AdminSettings from './pages/admin/Settings';

// Teacher Pages
import TeacherLayout from './layouts/TeacherLayout';
import TeacherDashboard from './pages/teacher/Dashboard';
import TeacherClasses from './pages/teacher/Classes';
import TeacherStudents from './pages/teacher/Students';
import TeacherAttendance from './pages/teacher/Attendance';
import TeacherGrades from './pages/teacher/Grades';
import TeacherSchedule from './pages/teacher/Schedule';
import TeacherProfile from './pages/teacher/Profile';

// Student Pages
import StudentLayout from './layouts/StudentLayout';
import StudentDashboard from './pages/student/Dashboard';
import StudentCourses from './pages/student/Courses';
import StudentGrades from './pages/student/Grades';
import StudentAttendance from './pages/student/Attendance';
import StudentSchedule from './pages/student/Schedule';
import StudentFees from './pages/student/Fees';
import StudentProfile from './pages/student/Profile';

// Common Pages
import AIAssistant from './pages/common/AIAssistant';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-dark-400 transition-colors duration-200">
            <Routes>
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Navigate to="/login" replace />} />

              {/* Admin Routes */}
              <Route path="/admin" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminLayout />
                </ProtectedRoute>
              }>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="students" element={<AdminStudents />} />
                <Route path="teachers" element={<AdminTeachers />} />
                <Route path="courses" element={<AdminCourses />} />
                <Route path="schedule" element={<AdminSchedule />} />
                <Route path="fees" element={<AdminFees />} />
                <Route path="reports" element={<AdminReports />} />
                <Route path="notifications" element={<AdminNotifications />} />
                <Route path="settings" element={<AdminSettings />} />
                <Route path="ai-assistant" element={<AIAssistant />} />
              </Route>

              {/* Teacher Routes */}
              <Route path="/teacher" element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <TeacherLayout />
                </ProtectedRoute>
              }>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<TeacherDashboard />} />
                <Route path="classes" element={<TeacherClasses />} />
                <Route path="students" element={<TeacherStudents />} />
                <Route path="attendance" element={<TeacherAttendance />} />
                <Route path="grades" element={<TeacherGrades />} />
                <Route path="schedule" element={<TeacherSchedule />} />
                <Route path="profile" element={<TeacherProfile />} />
                <Route path="ai-assistant" element={<AIAssistant />} />
              </Route>

              {/* Student Routes */}
              <Route path="/student" element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentLayout />
                </ProtectedRoute>
              }>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<StudentDashboard />} />
                <Route path="courses" element={<StudentCourses />} />
                <Route path="grades" element={<StudentGrades />} />
                <Route path="attendance" element={<StudentAttendance />} />
                <Route path="schedule" element={<StudentSchedule />} />
                <Route path="fees" element={<StudentFees />} />
                <Route path="profile" element={<StudentProfile />} />
                <Route path="ai-assistant" element={<AIAssistant />} />
              </Route>

              {/* Catch all */}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#1e293b',
                  color: '#f1f5f9',
                },
              }}
            />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
