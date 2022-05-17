import React, { useEffect, useState } from 'react';
import './Story.scss';

const Story = () => {
  const [storyList, setStoryList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/storyList.json')
      .then(res => res.json())
      .then(data => {
        setStoryList(data);
      });
  }, []);

  return (
    <div className="mainStory">
      <section className="storyBorder">
        <div className="storyProfile">
          {storyList.map(story => {
            return (
              <div className="storyProfileOne" key={story.id}>
                <img className="storyImg" src={story.src} alt="storyImg1" />
                <div className="storyProfileName">
                  <span>{story.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Story;
