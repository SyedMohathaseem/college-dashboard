import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineBookOpen, HiOutlineUsers, HiOutlineClock } from 'react-icons/hi';

const Classes = () => {
  const classes = [
    { id: 1, name: 'Data Structures', code: 'CS101', students: 45, schedule: 'Mon, Wed, Fri - 9:00 AM', room: 'CS-101' },
    { id: 2, name: 'Algorithms', code: 'CS201', students: 38, schedule: 'Tue, Thu - 11:00 AM', room: 'CS-102' },
    { id: 3, name: 'Database Systems', code: 'CS301', students: 42, schedule: 'Mon, Wed - 2:00 PM', room: 'CS-103' },
    { id: 4, name: 'Web Development', code: 'CS401', students: 35, schedule: 'Tue, Thu - 4:00 PM', room: 'Lab-1' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Classes</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage your assigned classes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {classes.map((cls, index) => (
          <motion.div
            key={cls.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card card-hover"
          >
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
                <HiOutlineBookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{cls.code}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">{cls.name}</h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <HiOutlineUsers className="w-4 h-4" />
                {cls.students} students
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <HiOutlineClock className="w-4 h-4" />
                {cls.schedule}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-100">
              <span className="text-sm text-gray-500">Room: {cls.room}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
