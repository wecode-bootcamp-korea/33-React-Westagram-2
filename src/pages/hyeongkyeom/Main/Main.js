import React, { useEffect, useState } from 'react';
import '/Users/kyeom/Desktop/33-React-Westagram-2/src/styles/common.scss';
import '/Users/kyeom/Desktop/33-React-Westagram-2/src/styles/reset.scss';
import '/Users/kyeom/Desktop/33-React-Westagram-2/src/styles/variables.scss';
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
            return (
              <Feed
                name={feed.name}
                text={feed.text}
                src={feed.src}
                key={feed.id}
                profile={feed.profile}
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
