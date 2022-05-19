import React from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav';
import Feed from './Components/Feed';
import Aside from './Components/Aside';

function Main() {
  return (
    <>
      <Nav />
      {/* FIXME: 불필요한 div */}
      <div className="main">
        <section>
          <Feed />
          <Aside />
        </section>
      </div>
    </>
  );
}

export default Main;
