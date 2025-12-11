import React from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineUsers,
  HiOutlineBookOpen,
  HiOutlineClipboardCheck,
  HiOutlineClock,
} from 'react-icons/hi';

const Dashboard = () => {
  const stats = [
    { label: 'Total Students', value: '245', icon: HiOutlineUsers, color: 'blue' },
    { label: 'Active Courses', value: '6', icon: HiOutlineBookOpen, color: 'emerald' },
    { label: 'Pending Assignments', value: '12', icon: HiOutlineClipboardCheck, color: 'violet' },
    { label: 'Classes Today', value: '4', icon: HiOutlineClock, color: 'amber' },
  ];

  const todayClasses = [
    { time: '9:00 AM', subject: 'Data Structures', room: 'CS-101', students: 45 },
    { time: '11:00 AM', subject: 'Algorithms', room: 'CS-102', students: 38 },
    { time: '2:00 PM', subject: 'Database Systems', room: 'CS-103', students: 42 },
    { time: '4:00 PM', subject: 'Web Development', room: 'Lab-1', students: 35 },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    violet: 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400',
    amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Teacher Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Welcome back! Here's your teaching overview.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <div className={`p-3 rounded-xl w-fit ${colorClasses[stat.color]}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-3">{stat.value}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Today's Classes</h3>
        <div className="space-y-3">
          {todayClasses.map((cls, index) => (
            <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-dark-200">
              <div className="text-sm font-medium text-primary-600 dark:text-primary-400 min-w-[80px]">
                {cls.time}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-white">{cls.subject}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cls.students} students</p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-100 px-2 py-1 rounded">
                {cls.room}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
