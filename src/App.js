import s from "./app.module.css";
import Profile from "./components/UI/Profile/index";
import user from "./components/UI/Profile/user.json";
import Statistics from "./components/UI/Statistics/index";
import statisticalData from "./components/UI/Statistics/statistical-data.json";
import FriendList from "./components/UI/FriendList/index";
import friends from "./components/UI/FriendList/friends.json";
import TransactionHistory from "./components/UI/TransactionHistory/index";
import transactions from "./components/UI/TransactionHistory/transactions.json";

function App() {
  return (
    <div className={s.app}>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div>
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
        <FriendList friends={friends} />
      </div>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
