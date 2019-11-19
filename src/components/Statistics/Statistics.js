import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    <h2 className={s.title}>{title}</h2>

    <ul className={s.statList}>
      {stats.map(stat => (
        <li key={stat.id}>
          <span className={s.label}>{stat.label}</span>
          <span className={s.percentage}>{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default Statistics;
