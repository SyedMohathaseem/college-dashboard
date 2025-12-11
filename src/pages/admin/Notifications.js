import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineBell,
  HiOutlineCheck,
  HiOutlineTrash,
  HiOutlineUserAdd,
  HiOutlineCash,
  HiOutlineCalendar,
  HiOutlineExclamation,
} from 'react-icons/hi';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'enrollment', title: 'New Student Enrolled', message: 'Rahul Sharma has enrolled in Computer Science', time: '2 hours ago', read: false },
    { id: 2, type: 'payment', title: 'Fee Payment Received', message: 'Payment of ₹45,000 received from Priya Patel', time: '3 hours ago', read: false },
    { id: 3, type: 'event', title: 'Upcoming Event', message: 'Faculty meeting scheduled for tomorrow at 3:00 PM', time: '5 hours ago', read: true },
    { id: 4, type: 'alert', title: 'Fee Overdue Alert', message: '15 students have overdue fee payments', time: '1 day ago', read: true },
    { id: 5, type: 'enrollment', title: 'Bulk Enrollment', message: '50 new students enrolled for the new semester', time: '2 days ago', read: true },
  ]);

  const getIcon = (type) => {
    switch (type) {
      case 'enrollment': return HiOutlineUserAdd;
      case 'payment': return HiOutlineCash;
      case 'event': return HiOutlineCalendar;
      case 'alert': return HiOutlineExclamation;
      default: return HiOutlineBell;
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case 'enrollment': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600';
      case 'payment': return 'bg-green-100 dark:bg-green-900/30 text-green-600';
      case 'event': return 'bg-purple-100 dark:bg-purple-900/30 text-purple-600';
      case 'alert': return 'bg-red-100 dark:bg-red-900/30 text-red-600';
      default: return 'bg-gray-100 dark:bg-gray-900/30 text-gray-600';
    }
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Notifications</h1>
          <p className="text-gray-500 dark:text-gray-400">Stay updated with recent activities</p>
        </div>
        <button onClick={markAllAsRead} className="btn-secondary">
          Mark all as read
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification, index) => {
          const Icon = getIcon(notification.type);
          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`card ${!notification.read ? 'border-l-4 border-l-primary-500' : ''}`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${getIconColor(notification.type)}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{notification.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{notification.message}</p>
                      <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 text-gray-500"
                          title="Mark as read"
                        >
                          <HiOutlineCheck className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 text-red-500"
                        title="Delete"
                      >
                        <HiOutlineTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {notifications.length === 0 && (
          <div className="card text-center py-12">
            <HiOutlineBell className="w-12 h-12 mx-auto text-gray-400" />
            <p className="text-gray-500 dark:text-gray-400 mt-4">No notifications</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
