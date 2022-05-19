import './LeftContent.scss';
import MainNewStroy from './MainNewStory';
import MainFeedBox from './MainFeedBox';
import { useEffect, useState } from 'react';

const LeftContent = () => {
  const [feedUsers, setUsers] = useState([]);
  // FIXME: no localhost
  useEffect(() => {
    fetch('http://localhost:3000/data/wanyoung/feedData.json')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="leftContent flex flexDirectionColumn">
      <MainNewStroy />
      {feedUsers.map(user => (
        <MainFeedBox feedUsers={user} key={user.id} />
      ))}
    </div>
  );
};
export default LeftContent;
