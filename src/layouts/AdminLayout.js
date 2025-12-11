import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineCreditCard,
  HiOutlineChartBar,
  HiOutlineCog,
  HiOutlineLogout,
  HiOutlineBell,
  HiOutlineSearch,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineSparkles,
} from 'react-icons/hi';

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { path: '/admin/dashboard', icon: HiOutlineHome, label: 'Dashboard' },
    { path: '/admin/students', icon: HiOutlineUsers, label: 'Students' },
    { path: '/admin/teachers', icon: HiOutlineAcademicCap, label: 'Teachers' },
    { path: '/admin/courses', icon: HiOutlineBookOpen, label: 'Courses' },
    { path: '/admin/schedule', icon: HiOutlineCalendar, label: 'Schedule' },
    { path: '/admin/fees', icon: HiOutlineCreditCard, label: 'Fees' },
    { path: '/admin/reports', icon: HiOutlineChartBar, label: 'Reports' },
    { path: '/admin/ai-assistant', icon: HiOutlineSparkles, label: 'AI Assistant' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 280 : 80 }}
        className="hidden lg:flex flex-col bg-white dark:bg-dark-300 border-r border-gray-200 dark:border-dark-100 transition-colors"
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-dark-100">
          <AnimatePresence mode="wait">
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <h1 className="font-bold text-gray-900 dark:text-white">MUC ORBIT</h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Admin Portal</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 text-gray-500"
          >
            <HiOutlineMenu className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-item ${isActive ? 'active' : ''} ${!sidebarOpen ? 'justify-center' : ''}`
              }
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <AnimatePresence mode="wait">
                {sidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-gray-200 dark:border-dark-100">
          <div className={`flex items-center gap-3 ${!sidebarOpen ? 'justify-center' : ''}`}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold">
              {user?.name?.charAt(0) || 'A'}
            </div>
            <AnimatePresence mode="wait">
              {sidebarOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 min-w-0"
                >
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{user?.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: 'tween' }}
            className="lg:hidden fixed left-0 top-0 bottom-0 w-[280px] bg-white dark:bg-dark-300 z-50 flex flex-col"
          >
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-dark-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <h1 className="font-bold text-gray-900 dark:text-white">MUC ORBIT</h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Admin Portal</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 text-gray-500"
              >
                <HiOutlineX className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `sidebar-item ${isActive ? 'active' : ''}`
                  }
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>

            <div className="p-4 border-t border-gray-200 dark:border-dark-100">
              <button
                onClick={handleLogout}
                className="sidebar-item w-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <HiOutlineLogout className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-dark-300 border-b border-gray-200 dark:border-dark-100 flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 text-gray-500"
            >
              <HiOutlineMenu className="w-5 h-5" />
            </button>
            
            {/* Search */}
            <div className="hidden sm:flex items-center gap-2 bg-gray-100 dark:bg-dark-200 rounded-xl px-4 py-2 w-64 lg:w-80">
              <HiOutlineSearch className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-200 text-gray-500 dark:text-gray-400"
            >
              {isDark ? <HiOutlineSun className="w-5 h-5" /> : <HiOutlineMoon className="w-5 h-5" />}
            </button>

            {/* Notifications */}
            <button
              onClick={() => navigate('/admin/notifications')}
              className={`relative p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-200 text-gray-500 dark:text-gray-400 ${
                location.pathname === '/admin/notifications' ? 'bg-gray-100 dark:bg-dark-200' : ''
              }`}
            >
              <HiOutlineBell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Settings */}
            <button
              onClick={() => navigate('/admin/settings')}
              className={`p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-200 text-gray-500 dark:text-gray-400 ${
                location.pathname === '/admin/settings' ? 'bg-gray-100 dark:bg-dark-200' : ''
              }`}
            >
              <HiOutlineCog className="w-5 h-5" />
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="hidden lg:flex p-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-500 dark:text-gray-400 hover:text-red-500"
            >
              <HiOutlineLogout className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 bg-gray-50 dark:bg-dark-400">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
