import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Grades = () => {
  const [selectedClass, setSelectedClass] = useState('CS101');

  const classes = [
    { code: 'CS101', name: 'Data Structures' },
    { code: 'CS201', name: 'Algorithms' },
  ];

  const students = [
    { id: 'STU001', name: 'Rahul Sharma', midterm: 85, finals: 88, assignments: 90, total: 87.5 },
    { id: 'STU002', name: 'Priya Patel', midterm: 92, finals: 95, assignments: 94, total: 93.5 },
    { id: 'STU003', name: 'Amit Kumar', midterm: 78, finals: 82, assignments: 85, total: 81 },
    { id: 'STU004', name: 'Sneha Reddy', midterm: 88, finals: 86, assignments: 92, total: 88.5 },
  ];

  const getGrade = (score) => {
    if (score >= 90) return 'A+';
    if (score >= 80) return 'A';
    if (score >= 70) return 'B+';
    if (score >= 60) return 'B';
    return 'C';
  };

  const saveGrades = () => {
    toast.success('Grades saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Grades</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage student grades</p>
      </div>

      <div className="card">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="input-field w-auto"
        >
          {classes.map(cls => (
            <option key={cls.code} value={cls.code}>{cls.name}</option>
          ))}
        </select>
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
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Midterm</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Finals</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Assignments</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Total</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Grade</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="table-row">
                  <td className="py-4">
                    <p className="font-medium text-gray-900 dark:text-white">{student.name}</p>
                  </td>
                  <td className="py-4 text-gray-600 dark:text-gray-400">{student.midterm}</td>
                  <td className="py-4 text-gray-600 dark:text-gray-400">{student.finals}</td>
                  <td className="py-4 text-gray-600 dark:text-gray-400">{student.assignments}</td>
                  <td className="py-4 font-medium text-gray-900 dark:text-white">{student.total}</td>
                  <td className="py-4">
                    <span className="badge badge-success">{getGrade(student.total)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-dark-100">
          <button onClick={saveGrades} className="btn-primary">
            Save Grades
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Grades;
