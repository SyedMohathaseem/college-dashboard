import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

const Reports = () => {
  const attendanceData = [
    { month: 'Jan', attendance: 92 },
    { month: 'Feb', attendance: 88 },
    { month: 'Mar', attendance: 95 },
    { month: 'Apr', attendance: 91 },
    { month: 'May', attendance: 87 },
    { month: 'Jun', attendance: 93 },
  ];

  const performanceData = [
    { dept: 'CS', gpa: 8.2 },
    { dept: 'EC', gpa: 7.8 },
    { dept: 'ME', gpa: 7.5 },
    { dept: 'CE', gpa: 7.9 },
    { dept: 'EE', gpa: 7.6 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports</h1>
        <p className="text-gray-500 dark:text-gray-400">Analytics and insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Attendance Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} />
                <YAxis stroke="#9CA3AF" fontSize={12} domain={[80, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#F3F4F6',
                  }}
                />
                <Line type="monotone" dataKey="attendance" stroke="#3B82F6" strokeWidth={2} dot={{ fill: '#3B82F6' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Department Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis dataKey="dept" stroke="#9CA3AF" fontSize={12} />
                <YAxis stroke="#9CA3AF" fontSize={12} domain={[0, 10]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#F3F4F6',
                  }}
                />
                <Bar dataKey="gpa" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Stats</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-dark-200 rounded-xl text-center">
            <p className="text-2xl font-bold text-primary-500">92%</p>
            <p className="text-sm text-gray-500">Avg Attendance</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-dark-200 rounded-xl text-center">
            <p className="text-2xl font-bold text-green-500">7.9</p>
            <p className="text-sm text-gray-500">Avg GPA</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-dark-200 rounded-xl text-center">
            <p className="text-2xl font-bold text-violet-500">85%</p>
            <p className="text-sm text-gray-500">Pass Rate</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-dark-200 rounded-xl text-center">
            <p className="text-2xl font-bold text-amber-500">78%</p>
            <p className="text-sm text-gray-500">Placement</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Reports;
