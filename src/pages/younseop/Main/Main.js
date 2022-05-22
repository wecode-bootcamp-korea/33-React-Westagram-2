import React, { useState, useEffect } from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav';
import Feed from './Components/Feed';
import Aside from './Components/Aside';

function Main() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/younseop/post.json')
      .then(response => response.json())
      .then(feedsData => setFeeds(feedsData));
  }, []);

  return (
    <>
      <Nav />
      <div className="main">
        <section>
          <div className="feedWrapper">
            {feeds.map(feedsData => (
              <Feed key={feedsData.id} data={feedsData} />
            ))}
          </div>
          <Aside />
        </section>
      </div>
    </>
  );
}

export default Main;
