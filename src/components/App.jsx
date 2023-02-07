import {Profile} from './Profile/Profile';
import {Statistics} from './Statistics/Statistics';
import { FriendList } from './FriendsList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import dataList from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

console.log(user);
console.log(dataList);

export function App() {
  return (
  <>
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    <Statistics
      title="Upload stats" 
      stats={dataList} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
  );
};

