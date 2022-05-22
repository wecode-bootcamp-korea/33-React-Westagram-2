import React, { useEffect, useState } from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav';
import Story from '../Components/Story';
import RightFeed from '../Components/RightFeed';

import Feed from '../Components/Feed';

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json')
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
            return <Feed feed={feed} key={feed.id} />;
          })}
        </div>
        <RightFeed />
      </section>
    </div>
  );
};

export default Main;
