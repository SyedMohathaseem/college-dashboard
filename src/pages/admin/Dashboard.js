import React from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineUsers,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCash,
  HiOutlineTrendingUp,
  HiOutlineTrendingDown,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineArrowRight,
} from 'react-icons/hi';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const Dashboard = () => {
  const stats = [
    { label: 'Total Students', value: '2,543', change: '+12%', trend: 'up', icon: HiOutlineUsers, color: 'indigo', gradient: 'from-indigo-500 to-purple-500' },
    { label: 'Total Teachers', value: '156', change: '+5%', trend: 'up', icon: HiOutlineAcademicCap, color: 'emerald', gradient: 'from-emerald-500 to-teal-500' },
    { label: 'Active Courses', value: '48', change: '+8%', trend: 'up', icon: HiOutlineBookOpen, color: 'violet', gradient: 'from-violet-500 to-pink-500' },
    { label: 'Fee Collection', value: '₹45.2L', change: '-3%', trend: 'down', icon: HiOutlineCash, color: 'amber', gradient: 'from-amber-500 to-orange-500' },
  ];

  const enrollmentData = [
    { month: 'Jan', students: 1800 },
    { month: 'Feb', students: 1950 },
    { month: 'Mar', students: 2100 },
    { month: 'Apr', students: 2200 },
    { month: 'May', students: 2350 },
    { month: 'Jun', students: 2543 },
  ];

  const departmentData = [
    { name: 'Computer Science', value: 680, color: '#6366f1' },
    { name: 'Electronics', value: 520, color: '#10B981' },
    { name: 'Mechanical', value: 450, color: '#8B5CF6' },
    { name: 'Civil', value: 380, color: '#F59E0B' },
    { name: 'Others', value: 513, color: '#EC4899' },
  ];

  const recentActivities = [
    { id: 1, action: 'New student enrolled', name: 'Rahul Sharma', time: '2 hours ago', type: 'enrollment' },
    { id: 2, action: 'Fee payment received', name: 'Priya Patel', time: '3 hours ago', type: 'payment' },
    { id: 3, action: 'New course added', name: 'Machine Learning', time: '5 hours ago', type: 'course' },
    { id: 4, action: 'Teacher assigned', name: 'Dr. Amit Kumar', time: '6 hours ago', type: 'assignment' },
    { id: 5, action: 'Exam scheduled', name: 'Mid-term Exams', time: '1 day ago', type: 'exam' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Faculty Meeting', date: 'Today, 3:00 PM', type: 'meeting', color: 'bg-indigo-500' },
    { id: 2, title: 'Student Orientation', date: 'Tomorrow, 10:00 AM', type: 'event', color: 'bg-emerald-500' },
    { id: 3, title: 'Board Exam Starts', date: 'Dec 15, 2024', type: 'exam', color: 'bg-rose-500' },
    { id: 4, title: 'Winter Vacation', date: 'Dec 25, 2024', type: 'holiday', color: 'bg-amber-500' },
  ];

  const colorClasses = {
    indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    violet: 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400',
    amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back! Here's what's happening at MUC.</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary flex items-center gap-2 self-start sm:self-auto"
        >
          View Reports
          <HiOutlineArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="stat-card group"
          >
            <div className="flex items-center justify-between relative z-10">
              <motion.div 
                className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}
                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </motion.div>
              <div className={`flex items-center gap-1 text-sm font-semibold px-2.5 py-1 rounded-full ${
                stat.trend === 'up' 
                  ? 'text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400' 
                  : 'text-rose-600 bg-rose-100 dark:bg-rose-900/30 dark:text-rose-400'
              }`}>
                {stat.trend === 'up' ? <HiOutlineTrendingUp className="w-4 h-4" /> : <HiOutlineTrendingDown className="w-4 h-4" />}
                {stat.change}
              </div>
            </div>
            <div className="mt-4 relative z-10">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Row */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Enrollment Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ y: -2 }}
          className="lg:col-span-2 card"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Student Enrollment Trend</h3>
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-100 px-3 py-1 rounded-full">Last 6 months</span>
          </div>
          <div className="h-64 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={enrollmentData}>
                <defs>
                  <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} />
                <YAxis stroke="#9CA3AF" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '12px',
                    color: '#F3F4F6',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="students"
                  stroke="#6366f1"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorStudents)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Department Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ y: -2 }}
          className="card"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Students by Department</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#F3F4F6',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {departmentData.slice(0, 4).map((dept) => (
              <div key={dept.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: dept.color }} />
                  <span className="text-gray-600 dark:text-gray-400">{dept.name}</span>
                </div>
                <span className="font-medium text-gray-900 dark:text-white">{dept.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Row */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ y: -2 }}
          className="card"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activities</h3>
            <button className="text-sm text-primary-600 dark:text-primary-400 hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <motion.div 
                key={activity.id} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-200 transition-colors cursor-pointer"
              >
                <div className="w-2.5 h-2.5 mt-1.5 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 animate-pulse" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.action}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{activity.name}</p>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1 bg-gray-100 dark:bg-dark-100 px-2 py-1 rounded-full">
                  <HiOutlineClock className="w-3 h-3" />
                  {activity.time}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ y: -2 }}
          className="card"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Events</h3>
            <button className="text-sm text-primary-600 dark:text-primary-400 hover:underline">View Calendar</button>
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <motion.div 
                key={event.id} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-dark-200 hover:bg-gray-100 dark:hover:bg-dark-100 transition-colors cursor-pointer group"
              >
                <div className={`p-2.5 rounded-xl ${event.color} shadow-lg`}>
                  <HiOutlineCalendar className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{event.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{event.date}</p>
                </div>
                <HiOutlineArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
