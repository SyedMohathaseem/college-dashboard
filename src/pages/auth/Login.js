import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { HiOutlineMoon, HiOutlineSun, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login, mockLogin } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = await login(email, password);
      toast.success(`Welcome back, ${user.name}!`);
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickLogin = (role) => {
    const user = mockLogin(role);
    if (user) {
      toast.success(`Welcome, ${user.name}!`);
      navigate(`/${role}/dashboard`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-400 dark:to-dark-300 p-4">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 rounded-xl bg-white dark:bg-dark-200 shadow-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-100"
      >
        {isDark ? <HiOutlineSun className="w-5 h-5" /> : <HiOutlineMoon className="w-5 h-5" />}
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Logo Section */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 mb-4 shadow-lg"
          >
            <span className="text-white font-bold text-3xl">M</span>
          </motion.div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">MUC ORBIT</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">College Dashboard Management System</p>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-dark-300 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-dark-100">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Sign In</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pr-10"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <HiOutlineEyeOff className="w-5 h-5" /> : <HiOutlineEye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500" />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
              </label>
              <a href="#" className="text-sm text-primary-500 hover:text-primary-600">Forgot password?</a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Demo Login Buttons */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-100">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-4">Quick Demo Login</p>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleQuickLogin('admin')}
                className="px-3 py-2 text-sm font-medium rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
              >
                Admin
              </button>
              <button
                onClick={() => handleQuickLogin('teacher')}
                className="px-3 py-2 text-sm font-medium rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors"
              >
                Teacher
              </button>
              <button
                onClick={() => handleQuickLogin('student')}
                className="px-3 py-2 text-sm font-medium rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 hover:bg-violet-200 dark:hover:bg-violet-900/50 transition-colors"
              >
                Student
              </button>
            </div>
          </div>

          {/* Demo Credentials */}
          <div className="mt-4 p-3 bg-gray-50 dark:bg-dark-200 rounded-xl">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Demo: admin@muc.edu / teacher@muc.edu / student@muc.edu
              <br />Password: password123
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
