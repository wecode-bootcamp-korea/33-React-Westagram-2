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
            const { id, src, name } = story;
            return (
              <div className="storyProfileOne" key={id}>
                <img className="storyImg" src={src} alt="storyImg1" />
                <div className="storyProfileName">
                  <span>{name}</span>
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
