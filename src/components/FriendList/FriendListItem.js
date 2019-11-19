import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={s.item}>
    <span className={isOnline ? s.statusOn : s.statusOf} />
    <img className={s.avatar} src={avatar} alt="" width="48" />
    <p className={s.name}> {name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
