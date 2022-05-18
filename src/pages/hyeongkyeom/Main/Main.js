import React, { useEffect, useState } from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav';
import Story from '../Components/Story';
import RightFeed from '../Components/RightFeed';

import Feed from '../Components/Feed';

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <div className="main">
      <section className="mainWrapper">
        <Nav />
        <div className="feeds">
          <Story />
          {feedList.map(feed => {
            const { name, text, src, id, profile, comment } = feed;
            return (
              <Feed
                name={name}
                text={text}
                src={src}
                key={id}
                profile={profile}
                comment={comment}
              />
            );
          })}
        </div>
        <RightFeed />
      </section>
    </div>
  );
};

export default Main;
