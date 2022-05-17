import React from 'react';
import Story from './Story';
import Recommend from './Recommend';
import Footer from './Footer';

const Aside = () => {
  return (
    <aside className="mainRight">
      <div className="asideWrapper">
        <div className="profile">
          <img
            src="images/younseop/post-user.jpg"
            alt=""
            className="imgUserPhoto"
          />
          <div className="profileTextWrapper">
            <span className="profileName">wecode_bootcamp</span>
            <span className="profileLocation">Wecode | 위코드</span>
          </div>
        </div>
        <Story />
        <Recommend />
        <Footer />
      </div>
    </aside>
  );
};

export default Aside;
