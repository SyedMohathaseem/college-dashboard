import React from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineCash,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineExclamationCircle,
} from 'react-icons/hi';

const Fees = () => {
  const feeStats = [
    { label: 'Total Collection', value: '₹45,23,000', icon: HiOutlineCash, color: 'blue' },
    { label: 'Paid', value: '₹38,50,000', icon: HiOutlineCheckCircle, color: 'green' },
    { label: 'Pending', value: '₹5,73,000', icon: HiOutlineClock, color: 'yellow' },
    { label: 'Overdue', value: '₹1,00,000', icon: HiOutlineExclamationCircle, color: 'red' },
  ];

  const feeRecords = [
    { id: 'STU001', name: 'Rahul Sharma', amount: '₹45,000', status: 'paid', date: '2024-01-15' },
    { id: 'STU002', name: 'Priya Patel', amount: '₹45,000', status: 'paid', date: '2024-01-12' },
    { id: 'STU003', name: 'Amit Kumar', amount: '₹45,000', status: 'pending', date: '2024-01-20' },
    { id: 'STU004', name: 'Sneha Reddy', amount: '₹45,000', status: 'overdue', date: '2024-01-05' },
    { id: 'STU005', name: 'Vikram Singh', amount: '₹45,000', status: 'paid', date: '2024-01-18' },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600',
    yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600',
    red: 'bg-red-100 dark:bg-red-900/30 text-red-600',
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Fee Management</h1>
        <p className="text-gray-500 dark:text-gray-400">Track and manage student fees</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {feeStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <div className={`p-3 rounded-xl w-fit ${colorClasses[stat.color]}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-3">{stat.value}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-200 dark:border-dark-100">
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Student</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Amount</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Status</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Date</th>
              </tr>
            </thead>
            <tbody>
              {feeRecords.map((record) => (
                <tr key={record.id} className="table-row">
                  <td className="py-4">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{record.name}</p>
                      <p className="text-sm text-gray-500">{record.id}</p>
                    </div>
                  </td>
                  <td className="py-4 font-medium text-gray-900 dark:text-white">{record.amount}</td>
                  <td className="py-4">
                    <span className={`badge ${
                      record.status === 'paid' ? 'badge-success' : 
                      record.status === 'pending' ? 'badge-warning' : 'badge-danger'
                    }`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="py-4 text-gray-500 dark:text-gray-400">{record.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Fees;
