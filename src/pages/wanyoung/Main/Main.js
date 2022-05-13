import React from 'react';
import './Main.scss';
import '../style/common.scss';
import Nav from '../../../Components/Nav';
import RightContent from '../components/RightContent';
import LeftContent from '../components/LeftContent';
function Main() {
  return (
    <body className="mainPage positionRelative">
      <Nav />
      <section className="mainContent flex">
        <LeftContent />
        <RightContent />
      </section>
    </body>
  );
}

export default Main;
