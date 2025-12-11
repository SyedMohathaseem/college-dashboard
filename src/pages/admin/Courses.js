import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineSearch,
  HiOutlinePlus,
  HiOutlineBookOpen,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineAcademicCap,
} from 'react-icons/hi';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    { id: 'CS101', name: 'Data Structures', department: 'Computer Science', credits: 4, students: 120, instructor: 'Dr. Rajesh Kumar', status: 'active' },
    { id: 'CS201', name: 'Algorithms', department: 'Computer Science', credits: 4, students: 95, instructor: 'Dr. Rajesh Kumar', status: 'active' },
    { id: 'EC101', name: 'Digital Electronics', department: 'Electronics', credits: 3, students: 80, instructor: 'Prof. Meera Sharma', status: 'active' },
    { id: 'ME101', name: 'Thermodynamics', department: 'Mechanical', credits: 4, students: 75, instructor: 'Dr. Anil Verma', status: 'active' },
    { id: 'CS301', name: 'Machine Learning', department: 'Computer Science', credits: 4, students: 60, instructor: 'Dr. Vijay Singh', status: 'upcoming' },
    { id: 'CE101', name: 'Structural Analysis', department: 'Civil', credits: 3, students: 65, instructor: 'Prof. Sunita Patel', status: 'active' },
  ];

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Courses</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage all academic courses</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <HiOutlinePlus className="w-5 h-5" />
          Add Course
        </button>
      </div>

      {/* Search */}
      <div className="card">
        <div className="relative max-w-md">
          <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-10"
          />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
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
              <span className={`badge ${course.status === 'active' ? 'badge-success' : 'badge-info'}`}>
                {course.status}
              </span>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">{course.id}</p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{course.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{course.department}</p>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-dark-100">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-gray-500 dark:text-gray-400">
                  <HiOutlineClock className="w-4 h-4" />
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{course.credits}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Credits</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-gray-500 dark:text-gray-400">
                  <HiOutlineUsers className="w-4 h-4" />
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{course.students}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-gray-500 dark:text-gray-400">
                  <HiOutlineAcademicCap className="w-4 h-4" />
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate text-xs">{course.instructor.split(' ')[1]}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Instructor</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
