import React from 'react';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import stats from './Statistics/Statistical-data.json';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

const App = () => (
  <div>
    <Profile user={user} />
    <Statistics title="File upload" stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
