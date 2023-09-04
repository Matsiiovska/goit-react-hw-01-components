import user from '../data/user.json';
import { Profile } from "./Profile/Profile";
import { Container } from './App.module';

import data from '../data/data.json';
import { Statistics } from "./Statistics/Statistics";


import friends from '../data/friends.json';
import { FriendList } from './FriendList/FriendList';


import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';




export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics 
        title='UPLOAD STATS'
        stats={data}
      />
      <FriendList friends={friends} />;
      <TransactionHistory
        transactions={transactions} />
    </Container>
  );
};
/*export default Profile;*/


