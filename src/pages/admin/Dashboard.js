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
    { label: 'Total Students', value: '2,543', change: '+12%', trend: 'up', icon: HiOutlineUsers, color: 'blue' },
    { label: 'Total Teachers', value: '156', change: '+5%', trend: 'up', icon: HiOutlineAcademicCap, color: 'emerald' },
    { label: 'Active Courses', value: '48', change: '+8%', trend: 'up', icon: HiOutlineBookOpen, color: 'violet' },
    { label: 'Fee Collection', value: '₹45.2L', change: '-3%', trend: 'down', icon: HiOutlineCash, color: 'amber' },
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
    { name: 'Computer Science', value: 680, color: '#3B82F6' },
    { name: 'Electronics', value: 520, color: '#10B981' },
    { name: 'Mechanical', value: 450, color: '#8B5CF6' },
    { name: 'Civil', value: 380, color: '#F59E0B' },
    { name: 'Others', value: 513, color: '#6B7280' },
  ];

  const recentActivities = [
    { id: 1, action: 'New student enrolled', name: 'Rahul Sharma', time: '2 hours ago', type: 'enrollment' },
    { id: 2, action: 'Fee payment received', name: 'Priya Patel', time: '3 hours ago', type: 'payment' },
    { id: 3, action: 'New course added', name: 'Machine Learning', time: '5 hours ago', type: 'course' },
    { id: 4, action: 'Teacher assigned', name: 'Dr. Amit Kumar', time: '6 hours ago', type: 'assignment' },
    { id: 5, action: 'Exam scheduled', name: 'Mid-term Exams', time: '1 day ago', type: 'exam' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Faculty Meeting', date: 'Today, 3:00 PM', type: 'meeting' },
    { id: 2, title: 'Student Orientation', date: 'Tomorrow, 10:00 AM', type: 'event' },
    { id: 3, title: 'Board Exam Starts', date: 'Dec 15, 2024', type: 'exam' },
    { id: 4, title: 'Winter Vacation', date: 'Dec 25, 2024', type: 'holiday' },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    violet: 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400',
    amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Welcome back! Here's what's happening at MUC.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl ${colorClasses[stat.color]}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.trend === 'up' ? <HiOutlineTrendingUp /> : <HiOutlineTrendingDown />}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Enrollment Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 card"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Student Enrollment Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={enrollmentData}>
                <defs>
                  <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} />
                <YAxis stroke="#9CA3AF" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#F3F4F6',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="students"
                  stroke="#3B82F6"
                  strokeWidth={2}
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
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary-500" />
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">{activity.action}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{activity.name}</p>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                  <HiOutlineClock className="w-3 h-3" />
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="card"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-dark-200">
                <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                  <HiOutlineCalendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{event.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
