import React from 'react';
import { motion } from 'framer-motion';

const Attendance = () => {
  const courses = [
    { code: 'CS101', name: 'Data Structures', attended: 42, total: 45, percentage: 93 },
    { code: 'CS201', name: 'Algorithms', attended: 38, total: 42, percentage: 90 },
    { code: 'CS301', name: 'Database Systems', attended: 35, total: 38, percentage: 92 },
    { code: 'CS401', name: 'Web Development', attended: 28, total: 32, percentage: 88 },
    { code: 'CS501', name: 'Machine Learning', attended: 20, total: 22, percentage: 91 },
  ];

  const overallAttendance = 92;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Attendance</h1>
        <p className="text-gray-500 dark:text-gray-400">Track your class attendance</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Overall Attendance</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{overallAttendance}%</p>
          </div>
          <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
            overallAttendance >= 75 ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'
          }`}>
            <span className={`text-2xl font-bold ${
              overallAttendance >= 75 ? 'text-green-600' : 'text-red-600'
            }`}>
              {overallAttendance >= 75 ? '✓' : '!'}
            </span>
          </div>
        </div>
        <p className={`mt-2 text-sm ${overallAttendance >= 75 ? 'text-green-600' : 'text-red-600'}`}>
          {overallAttendance >= 75 ? 'Good standing - minimum requirement met' : 'Warning: Below 75% attendance requirement'}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Course-wise Attendance</h3>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.code} className="p-4 rounded-xl bg-gray-50 dark:bg-dark-200">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{course.name}</p>
                  <p className="text-sm text-gray-500">{course.code} • {course.attended}/{course.total} classes</p>
                </div>
                <span className={`text-lg font-bold ${
                  course.percentage >= 75 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {course.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-dark-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    course.percentage >= 75 ? 'bg-green-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${course.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Attendance;
