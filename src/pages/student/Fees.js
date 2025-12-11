import React from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineCash,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineDownload,
} from 'react-icons/hi';

const Fees = () => {
  const feesSummary = {
    totalFees: '₹1,20,000',
    paid: '₹1,20,000',
    pending: '₹0',
    nextDue: 'N/A',
  };

  const transactions = [
    { id: 'TXN001', date: '2024-07-15', amount: '₹60,000', type: 'Semester Fee', status: 'paid' },
    { id: 'TXN002', date: '2024-01-10', amount: '₹60,000', type: 'Semester Fee', status: 'paid' },
    { id: 'TXN003', date: '2023-07-12', amount: '₹5,000', type: 'Registration Fee', status: 'paid' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Fees</h1>
        <p className="text-gray-500 dark:text-gray-400">View and manage your fee payments</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
          <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 w-fit">
            <HiOutlineCash className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-3">{feesSummary.totalFees}</p>
          <p className="text-sm text-gray-500">Total Fees</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card">
          <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 w-fit">
            <HiOutlineCheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-3">{feesSummary.paid}</p>
          <p className="text-sm text-gray-500">Paid</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card">
          <div className="p-3 rounded-xl bg-red-100 dark:bg-red-900/30 w-fit">
            <HiOutlineClock className="w-6 h-6 text-red-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-3">{feesSummary.pending}</p>
          <p className="text-sm text-gray-500">Pending</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="card">
          <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30 w-fit">
            <HiOutlineClock className="w-6 h-6 text-amber-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-3">{feesSummary.nextDue}</p>
          <p className="text-sm text-gray-500">Next Due</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payment History</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-200 dark:border-dark-100">
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Transaction ID</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Date</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Type</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Amount</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Status</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.id} className="table-row">
                  <td className="py-4 font-medium text-gray-900 dark:text-white">{txn.id}</td>
                  <td className="py-4 text-gray-600 dark:text-gray-400">{txn.date}</td>
                  <td className="py-4 text-gray-600 dark:text-gray-400">{txn.type}</td>
                  <td className="py-4 font-medium text-gray-900 dark:text-white">{txn.amount}</td>
                  <td className="py-4">
                    <span className="badge badge-success">{txn.status}</span>
                  </td>
                  <td className="py-4">
                    <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 text-primary-500">
                      <HiOutlineDownload className="w-4 h-4" />
                    </button>
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

export default Fees;
