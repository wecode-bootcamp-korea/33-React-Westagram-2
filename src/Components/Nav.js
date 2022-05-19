import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Nav.scss';
const Nav = () => {
  const [userList, setUserList] = useState([]);
  const [value, setValue] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const onMenuClick = () => setShowMenu(!showMenu);
  const onKeyPress = e => setShowSearch(!showSearch);
  const navigate = useNavigate();
  const goToLogin = e => navigate('/login-hyeongkyeom');
  useEffect(() => {
    fetch('http://localhost:3000/data/userData.json')
      .then(res => res.json())
      .then(data => {
        setUserList(data);
      });
  }, []);

  return (
    <section className="mainNav">
      <div className="mainNavLogo">
        <span className="mainNavText">Westagram</span>
      </div>
      <div className="mainNavSearch">
        <i className="fa-solid fa-magnifying-glass" />
        <input
          className="navSearch"
          type="search"
          value={value}
          placeholder="검색"
          onChange={e => {
            setValue(e.target.value);
          }}
          onKeyDown={onKeyPress}
        />
      </div>
      {showSearch ? (
        <div className="searchBar">
          {userList
            .filter(list => {
              return list.nickname.toLowerCase().includes(value.toLowerCase())
                ? list
                : null;
            })
            .map(list => (
              <li key={list.id}>
                <img className="searchImg" alt="searchImg" src={list.src} />
                <div class="searchUser">
                  <span class="searchId">{list.nickname}</span>
                  <p class="searchName">{list.name}</p>
                </div>
              </li>
            ))}
        </div>
      ) : null}

      <div className="mainNavicon">
        <img src="images/Nav/homepage.png" alt="home" />
        <img src="images/Nav/DM.png" alt="DM" />
        <img src="images/Nav/Add.png" alt="addFeed" />
        <img src="images/Nav/explore.png" alt="explore" />
        <img src="images/Nav/heart.png" alt="heart" />
        <img src="images/Nav/user.png" alt="user" onClick={onMenuClick} />
      </div>
      {showMenu ? (
        <div class="profileMenubar">
          <li>
            <i class="fa-regular fa-circle-user" />
            <p>프로필</p>
          </li>
          <li>
            <i class="fa-regular fa-bookmark" />
            <p>저장됨</p>
          </li>
          <li>
            <i class="fa-solid fa-gear" />
            <p>설정</p>
          </li>
          <li>
            <i class="fa-solid fa-arrow-right-arrow-left" />
            <p>계정 전환</p>
          </li>
          <div class="logout" onClick={goToLogin}>
            <li>로그아웃</li>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Nav;
