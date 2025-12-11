import React from 'react';
import { motion } from 'framer-motion';

const Grades = () => {
  const semesters = [
    {
      name: 'Semester 4 (Current)',
      gpa: 8.5,
      courses: [
        { code: 'CS101', name: 'Data Structures', credits: 4, grade: 'A', score: 85 },
        { code: 'CS201', name: 'Algorithms', credits: 4, grade: 'A+', score: 92 },
        { code: 'CS301', name: 'Database Systems', credits: 3, grade: 'A', score: 88 },
        { code: 'CS401', name: 'Web Development', credits: 4, grade: 'B+', score: 78 },
      ],
    },
    {
      name: 'Semester 3',
      gpa: 8.2,
      courses: [
        { code: 'CS102', name: 'OOP with Java', credits: 4, grade: 'A', score: 86 },
        { code: 'CS202', name: 'Computer Organization', credits: 3, grade: 'B+', score: 75 },
        { code: 'MA201', name: 'Discrete Mathematics', credits: 4, grade: 'A', score: 88 },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Grades</h1>
        <p className="text-gray-500 dark:text-gray-400">View your academic performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card text-center">
          <p className="text-3xl font-bold text-primary-500">8.5</p>
          <p className="text-sm text-gray-500">Current CGPA</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card text-center">
          <p className="text-3xl font-bold text-green-500">15</p>
          <p className="text-sm text-gray-500">Credits Completed</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card text-center">
          <p className="text-3xl font-bold text-violet-500">4</p>
          <p className="text-sm text-gray-500">Semesters</p>
        </motion.div>
      </div>

      {semesters.map((semester, index) => (
        <motion.div
          key={semester.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="card"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{semester.name}</h3>
            <span className="text-lg font-bold text-primary-500">GPA: {semester.gpa}</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-200 dark:border-dark-100">
                  <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Course</th>
                  <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Credits</th>
                  <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Score</th>
                  <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Grade</th>
                </tr>
              </thead>
              <tbody>
                {semester.courses.map((course) => (
                  <tr key={course.code} className="table-row">
                    <td className="py-3">
                      <p className="font-medium text-gray-900 dark:text-white">{course.name}</p>
                      <p className="text-sm text-gray-500">{course.code}</p>
                    </td>
                    <td className="py-3 text-gray-600 dark:text-gray-400">{course.credits}</td>
                    <td className="py-3 text-gray-600 dark:text-gray-400">{course.score}</td>
                    <td className="py-3">
                      <span className="badge badge-success">{course.grade}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Grades;
