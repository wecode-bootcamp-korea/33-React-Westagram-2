import React from 'react';

const StoryItems = () => {
  return (
    <ul className="storyContents">
      {STORY_ITEM.map(profile => {
        return (
          <li className="storyProfile" key={profile.id}>
            <img
              src="images/younseop/post-user.jpg"
              alt=""
              className="imgUserPhoto"
            />
            <div className="storyTextWrapper">
              <span className="storyName">{profile.username}</span>
              <span className="storyTime">{profile.time}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const STORY_ITEM = [
  { id: 1, username: 'seop_code', time: '방금 전' },
  { id: 2, username: 'younseop', time: '10분 전' },
  { id: 3, username: 'dbstjq', time: '1시간 전' },
  { id: 4, username: 'devseop', time: '2시간 전' },
];

export default StoryItems;
