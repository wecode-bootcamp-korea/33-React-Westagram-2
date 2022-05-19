import React, { useState, useEffect } from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav';
import Feed from './Components/Feed';
import Aside from './Components/Aside';

function Main() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/younseop/post.json')
      .then(response => response.json())
      .then(result => setFeed(result));
  }, []);

  return (
    <>
      <Nav />
      <div className="main">
        <section>
          <div className="feedWrapper">
            {feed.map(result => (
              <Feed key={result.id} data={result} />
            ))}
          </div>
          <Aside />
        </section>
      </div>
    </>
  );
}

export default Main;
