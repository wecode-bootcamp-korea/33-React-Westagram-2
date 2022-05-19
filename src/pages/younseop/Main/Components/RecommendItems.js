import React, { useEffect, useState } from 'react';

const RecommendItems = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/younseop/recommendItems.json')
      .then(response => response.json())
      .then(result => setItem(result));
  }, []);

  return (
    <ul className="userList">
      {item.map(profile => {
        return (
          <li className="userListItem" key={profile.id}>
            <div className="listItemInfo">
              <img
                src="images/younseop/post-user.jpg"
                alt="post user"
                className="imgUserPhoto"
              />
              <div className="storyTextWrapper">
                <span className="storyName">{profile.username}</span>
                <span className="storyTime">{profile.time}</span>
              </div>
            </div>
            <button className="userFollow">팔로우</button>
          </li>
        );
      })}
    </ul>
  );
};

export default RecommendItems;
