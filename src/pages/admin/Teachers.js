import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineSearch,
  HiOutlinePlus,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineEye,
  HiOutlineMail,
} from 'react-icons/hi';

const Teachers = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const teachers = [
    { id: 'TCH001', name: 'Dr. Rajesh Kumar', email: 'rajesh.k@muc.edu', department: 'Computer Science', subjects: ['Data Structures', 'Algorithms'], experience: 12, status: 'active' },
    { id: 'TCH002', name: 'Prof. Meera Sharma', email: 'meera.s@muc.edu', department: 'Electronics', subjects: ['Digital Electronics', 'Microprocessors'], experience: 15, status: 'active' },
    { id: 'TCH003', name: 'Dr. Anil Verma', email: 'anil.v@muc.edu', department: 'Mechanical', subjects: ['Thermodynamics', 'Fluid Mechanics'], experience: 10, status: 'active' },
    { id: 'TCH004', name: 'Prof. Sunita Patel', email: 'sunita.p@muc.edu', department: 'Civil', subjects: ['Structural Analysis', 'Construction'], experience: 8, status: 'on-leave' },
    { id: 'TCH005', name: 'Dr. Vijay Singh', email: 'vijay.s@muc.edu', department: 'Computer Science', subjects: ['Machine Learning', 'AI'], experience: 7, status: 'active' },
  ];

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    teacher.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Teachers</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage faculty members</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <HiOutlinePlus className="w-5 h-5" />
          Add Teacher
        </button>
      </div>

      {/* Search */}
      <div className="card">
        <div className="relative max-w-md">
          <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search teachers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-10"
          />
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher, index) => (
          <motion.div
            key={teacher.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card card-hover"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-semibold text-lg">
                  {teacher.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{teacher.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{teacher.department}</p>
                </div>
              </div>
              <span className={`badge ${teacher.status === 'active' ? 'badge-success' : 'badge-warning'}`}>
                {teacher.status}
              </span>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <HiOutlineMail className="w-4 h-4" />
                {teacher.email}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Experience:</span> {teacher.experience} years
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {teacher.subjects.map((subject) => (
                  <span key={subject} className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400">
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-dark-100">
              <button className="flex-1 btn-secondary py-2 flex items-center justify-center gap-1">
                <HiOutlineEye className="w-4 h-4" />
                View
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 text-gray-500">
                <HiOutlinePencil className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 text-red-500">
                <HiOutlineTrash className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
