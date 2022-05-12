import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <section className="mainNav">
      <div className="mainNavLogo" onclick="location.href='main.html'">
        <span className="mainNav_text">Westagram</span>
      </div>
      <div className="mainNavSearch">
        <i id="nav_searchIcon" className="fa-solid fa-magnifying-glass" />
        <input
          className="navSearch"
          type="search"
          name="q"
          placeholder="검색"
        />
      </div>
      <div className="searchBar" />
      <div className="mainNavicon">
        <img src="images/Nav/homepage.png" alt="home" />
        <img src="images/Nav/DM.png" alt="DM" />
        <img src="images/Nav/Add.png" alt="addFeed" />
        <img src="images/Nav/explore.png" alt="explore" />
        <img src="images/Nav/heart.png" alt="heart" />
        <img src="images/Nav/user.png" alt="user" />
      </div>
    </section>
  );
};

export default Nav;
