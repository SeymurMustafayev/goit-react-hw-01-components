import React from 'react';
import PropTypes from 'prop-types';
import s from './Transaction.module.css';

const TransactionHistory = ({ items }) => (
  <table className={s.transaction}>
    <thead>
      <tr>
        <th className={s.th}>Type</th>
        <th className={s.th}>Amount</th>
        <th className={s.th}>Currency</th>
      </tr>
    </thead>

    <tbody className={s.tbody}>
      {items.map(item => (
        <tr className={s.tr} key={item.id}>
          <td className={s.type}>{item.type}</td>
          <td className={s.amount}>{item.amount}</td>
          <td className={s.currency}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
