import React from 'react';
import '/Users/kyeom/Desktop/33-React-Westagram-2/src/styles/common.scss';
import '/Users/kyeom/Desktop/33-React-Westagram-2/src/styles/reset.scss';
import '/Users/kyeom/Desktop/33-React-Westagram-2/src/styles/variables.scss';
import './Main.scss';
import Nav from '../../../Components/Nav';
import Story from '../Components/Story';
import RightFeed from '../Components/RightFeed';

import Feed from '../Components/Feed';

const Main = () => {
  return (
    <div className="main">
      <section className="mainWrapper">
        <Nav />
        <div className="feeds">
          <Story />
          <Feed />
        </div>
        <RightFeed />
      </section>
    </div>
  );
};

export default Main;
