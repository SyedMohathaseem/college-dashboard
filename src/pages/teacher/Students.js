import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineSearch } from 'react-icons/hi';

const Students = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const students = [
    { id: 'STU001', name: 'Rahul Sharma', email: 'rahul@muc.edu', course: 'Data Structures', attendance: 92, grade: 'A' },
    { id: 'STU002', name: 'Priya Patel', email: 'priya@muc.edu', course: 'Algorithms', attendance: 88, grade: 'A+' },
    { id: 'STU003', name: 'Amit Kumar', email: 'amit@muc.edu', course: 'Database Systems', attendance: 85, grade: 'B+' },
    { id: 'STU004', name: 'Sneha Reddy', email: 'sneha@muc.edu', course: 'Web Development', attendance: 90, grade: 'A' },
    { id: 'STU005', name: 'Vikram Singh', email: 'vikram@muc.edu', course: 'Data Structures', attendance: 78, grade: 'B' },
  ];

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Students</h1>
        <p className="text-gray-500 dark:text-gray-400">View and manage your students</p>
      </div>

      <div className="card">
        <div className="relative max-w-md">
          <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search students..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-10"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-200 dark:border-dark-100">
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Student</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Course</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Attendance</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Grade</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="table-row">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 font-medium">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{student.name}</p>
                        <p className="text-xs text-gray-500">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-gray-600 dark:text-gray-400">{student.course}</td>
                  <td className="py-4">
                    <span className={`font-medium ${student.attendance >= 85 ? 'text-green-500' : 'text-red-500'}`}>
                      {student.attendance}%
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="badge badge-success">{student.grade}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Students;
