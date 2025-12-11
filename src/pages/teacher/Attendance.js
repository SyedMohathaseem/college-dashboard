import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCheck, HiOutlineX } from 'react-icons/hi';
import toast from 'react-hot-toast';

const Attendance = () => {
  const [selectedClass, setSelectedClass] = useState('CS101');
  const [attendance, setAttendance] = useState({});

  const classes = [
    { code: 'CS101', name: 'Data Structures' },
    { code: 'CS201', name: 'Algorithms' },
    { code: 'CS301', name: 'Database Systems' },
  ];

  const students = [
    { id: 'STU001', name: 'Rahul Sharma' },
    { id: 'STU002', name: 'Priya Patel' },
    { id: 'STU003', name: 'Amit Kumar' },
    { id: 'STU004', name: 'Sneha Reddy' },
    { id: 'STU005', name: 'Vikram Singh' },
  ];

  const toggleAttendance = (studentId) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: !prev[studentId]
    }));
  };

  const saveAttendance = () => {
    toast.success('Attendance saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Attendance</h1>
        <p className="text-gray-500 dark:text-gray-400">Mark student attendance</p>
      </div>

      <div className="card">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="input-field w-auto"
          >
            {classes.map(cls => (
              <option key={cls.code} value={cls.code}>{cls.name}</option>
            ))}
          </select>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Date: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
      >
        <div className="space-y-3">
          {students.map((student) => (
            <div 
              key={student.id}
              className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-dark-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 font-medium">
                  {student.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{student.name}</p>
                  <p className="text-sm text-gray-500">{student.id}</p>
                </div>
              </div>
              <button
                onClick={() => toggleAttendance(student.id)}
                className={`p-2 rounded-xl transition-colors ${
                  attendance[student.id] 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-600'
                }`}
              >
                {attendance[student.id] ? <HiOutlineCheck className="w-5 h-5" /> : <HiOutlineX className="w-5 h-5" />}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-dark-100">
          <button onClick={saveAttendance} className="btn-primary">
            Save Attendance
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Attendance;
