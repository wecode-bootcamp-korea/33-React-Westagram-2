import React, { useState, useEffect } from 'react';

const StoryItems = () => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/younseop/storyItems.json')
      .then(response => response.json())
      .then(result => setStory(result));
  }, []);

  return (
    <ul className="storyContents">
      {story.map(profile => {
        return (
          <li className="storyProfile" key={profile.id}>
            <img
              src="images/younseop/post-user.jpg"
              alt="post user"
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

export default StoryItems;
