import './MainNewStory.scss';
import NewStoryImg from '../Main/NewStoryImg';
import { useEffect, useState } from 'react';

const MainNewStroy = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/wanyoung/newstoryData.json')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      });
  }, []);
  return (
    <article className="leftContentNewStory flex spaceBetween">
      {users.map(user => (
        <NewStoryImg users={user} key={user.id} />
      ))}
    </article>
  );
};

export default MainNewStroy;
