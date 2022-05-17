import React from 'react';
import StoryItems from './StoryItems';

const Story = () => {
  return (
    <div className="story">
      <div className="storyHeader">
        <span className="storyTitle">스토리</span>
        <button className="storyAll">모두 보기</button>
      </div>
      <StoryItems />
    </div>
  );
};

export default Story;
