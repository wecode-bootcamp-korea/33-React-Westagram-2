import React from 'react';

const RecommendItems = () => {
  return (
    <ul className="userList">
      {RECOMMEND_ITEM.map(profile => {
        return (
          <li className="userListItem" key={profile.id}>
            <div className="listItemInfo">
              <img
                src="images/younseop/post-user.jpg"
                alt=""
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

const RECOMMEND_ITEM = [
  { id: 1, username: 'seop_code', time: '방금 전' },
  { id: 2, username: 'younseop', time: '10분 전' },
  { id: 3, username: 'dbstjq', time: '1시간 전' },
  { id: 4, username: 'devseop', time: '2시간 전' },
];

export default RecommendItems;
