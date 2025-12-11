import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineSearch,
  HiOutlinePlus,
  HiOutlineDotsVertical,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineEye,
  HiOutlineDownload,
  HiOutlineFilter,
} from 'react-icons/hi';

const Students = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const students = [
    { id: 'STU2024001', name: 'Rahul Sharma', email: 'rahul.s@muc.edu', department: 'Computer Science', semester: 4, status: 'active', gpa: 8.5 },
    { id: 'STU2024002', name: 'Priya Patel', email: 'priya.p@muc.edu', department: 'Electronics', semester: 6, status: 'active', gpa: 9.2 },
    { id: 'STU2024003', name: 'Amit Kumar', email: 'amit.k@muc.edu', department: 'Mechanical', semester: 2, status: 'active', gpa: 7.8 },
    { id: 'STU2024004', name: 'Sneha Reddy', email: 'sneha.r@muc.edu', department: 'Civil', semester: 4, status: 'inactive', gpa: 8.1 },
    { id: 'STU2024005', name: 'Vikram Singh', email: 'vikram.s@muc.edu', department: 'Computer Science', semester: 8, status: 'active', gpa: 8.9 },
    { id: 'STU2024006', name: 'Anita Desai', email: 'anita.d@muc.edu', department: 'Electronics', semester: 4, status: 'active', gpa: 7.5 },
  ];

  const departments = ['all', 'Computer Science', 'Electronics', 'Mechanical', 'Civil'];

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDepartment === 'all' || student.department === selectedDepartment;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Students</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage all enrolled students</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <HiOutlinePlus className="w-5 h-5" />
          Add Student
        </button>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="input-field w-auto"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
            <button className="btn-secondary flex items-center gap-2">
              <HiOutlineFilter className="w-5 h-5" />
              Filter
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <HiOutlineDownload className="w-5 h-5" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-200 dark:border-dark-100">
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Student ID</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Name</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Department</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Semester</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">GPA</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Status</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="table-row">
                  <td className="py-4 text-sm font-medium text-gray-900 dark:text-white">{student.id}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-medium">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{student.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-gray-600 dark:text-gray-400">{student.department}</td>
                  <td className="py-4 text-sm text-gray-600 dark:text-gray-400">{student.semester}</td>
                  <td className="py-4">
                    <span className={`text-sm font-medium ${
                      student.gpa >= 8 ? 'text-green-500' : student.gpa >= 7 ? 'text-yellow-500' : 'text-red-500'
                    }`}>
                      {student.gpa}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`badge ${student.status === 'active' ? 'badge-success' : 'badge-danger'}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 text-gray-500">
                        <HiOutlineEye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 text-gray-500">
                        <HiOutlinePencil className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 text-red-500">
                        <HiOutlineTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-100 mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredStudents.length} of {students.length} students
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm rounded-lg bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-100">
              Previous
            </button>
            <button className="px-3 py-1 text-sm rounded-lg bg-primary-500 text-white">1</button>
            <button className="px-3 py-1 text-sm rounded-lg bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-100">
              2
            </button>
            <button className="px-3 py-1 text-sm rounded-lg bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-100">
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Students;
