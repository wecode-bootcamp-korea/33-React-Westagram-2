import React from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav';
//import Post from '../../components/Post/Post';
//import Aside from '../../components/Aside/Aside';

function Main() {
  return (
    <>
      <Nav />
      <div className="main">
        <section>
          <div>메인페이지입니다.</div>
        </section>
      </div>
    </>
  );
}

export default Main;
