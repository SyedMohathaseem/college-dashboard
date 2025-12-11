import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCalendar } from 'react-icons/hi';

const Schedule = () => {
  const schedule = [
    { day: 'Monday', slots: [
      { time: '9:00 AM', subject: 'Data Structures', room: 'CS-101' },
      { time: '2:00 PM', subject: 'Database Systems', room: 'CS-103' },
    ]},
    { day: 'Tuesday', slots: [
      { time: '11:00 AM', subject: 'Algorithms', room: 'CS-102' },
      { time: '4:00 PM', subject: 'Web Development', room: 'Lab-1' },
    ]},
    { day: 'Wednesday', slots: [
      { time: '9:00 AM', subject: 'Data Structures', room: 'CS-101' },
      { time: '2:00 PM', subject: 'Database Systems', room: 'CS-103' },
    ]},
    { day: 'Thursday', slots: [
      { time: '11:00 AM', subject: 'Algorithms', room: 'CS-102' },
      { time: '4:00 PM', subject: 'Web Development', room: 'Lab-1' },
    ]},
    { day: 'Friday', slots: [
      { time: '9:00 AM', subject: 'Data Structures', room: 'CS-101' },
    ]},
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Schedule</h1>
        <p className="text-gray-500 dark:text-gray-400">Weekly teaching schedule</p>
      </div>

      <div className="grid gap-4">
        {schedule.map((day, index) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HiOutlineCalendar className="w-5 h-5 text-primary-500" />
              {day.day}
            </h3>
            <div className="space-y-2">
              {day.slots.map((slot, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-dark-200">
                  <div className="text-sm font-medium text-primary-600 dark:text-primary-400 min-w-[80px]">
                    {slot.time}
                  </div>
                  <div className="flex-1 font-medium text-gray-900 dark:text-white">{slot.subject}</div>
                  <div className="text-sm text-gray-500 bg-gray-100 dark:bg-dark-100 px-2 py-1 rounded">
                    {slot.room}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
