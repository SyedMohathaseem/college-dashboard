import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineBookOpen, HiOutlineUser, HiOutlineClock } from 'react-icons/hi';

const Courses = () => {
  const courses = [
    { id: 'CS101', name: 'Data Structures', instructor: 'Dr. Rajesh Kumar', credits: 4, progress: 75 },
    { id: 'CS201', name: 'Algorithms', instructor: 'Dr. Rajesh Kumar', credits: 4, progress: 60 },
    { id: 'CS301', name: 'Database Systems', instructor: 'Prof. Amit Sharma', credits: 3, progress: 80 },
    { id: 'CS401', name: 'Web Development', instructor: 'Prof. Neha Gupta', credits: 4, progress: 55 },
    { id: 'CS501', name: 'Machine Learning', instructor: 'Dr. Vijay Singh', credits: 4, progress: 40 },
    { id: 'CS601', name: 'Computer Networks', instructor: 'Dr. Priya Patel', credits: 3, progress: 70 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Courses</h1>
        <p className="text-gray-500 dark:text-gray-400">Your enrolled courses this semester</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card card-hover"
          >
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-900/30">
                <HiOutlineBookOpen className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <span className="text-sm font-medium text-gray-500">{course.id}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">{course.name}</h3>
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <HiOutlineUser className="w-4 h-4" />
                {course.instructor}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <HiOutlineClock className="w-4 h-4" />
                {course.credits} Credits
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-gray-400">Progress</span>
                <span className="font-medium text-gray-900 dark:text-white">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-dark-100 rounded-full h-2">
                <div
                  className="bg-primary-500 h-2 rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
