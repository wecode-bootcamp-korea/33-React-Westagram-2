import React from 'react';
import './Main.scss';
import '../style/common.scss';
import Nav from '../components/Nav';
import RightContent from './RightContent';
import LeftContent from './LeftContent';
function Main() {
  return (
    <section className="mainPage positionRelative">
      <Nav className="Nav" />
      <section className="mainContent flex">
        <LeftContent />
        <RightContent />
      </section>
    </section>
  );
}

export default Main;
