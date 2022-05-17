import { useEffect, useState } from 'react';
import './Nav.scss';

const Nav = () => {
  const [navIcon, setNavIcon] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/wanyoung/iconData.json')
      .then(res => res.json())
      .then(data => setNavIcon(data));
  }, []);
  return (
    <section className="navBar positionFixed flex center">
      <nav className="navBarInner flex spaceAround positionFixed">
        <h2 className="logo">Westagram</h2>
        <div className="positionRelative">
          <i className="fa-solid fa-magnifying-glass positionAbsolute glass" />
          <input
            className="navBarInput"
            type="text"
            placeholder="검색"
            maxLength="14"
          />
          <div className="searchUserResult flex flexDirectionColumn flexStart hidden" />
        </div>
        <div className="navBarItem flex spaceAround positionRelative">
          {navIcon.map(icon => (
            <img key={icon.id} src={icon.src} alt={icon.alt} />
          ))}
          <button>
            <img
              id="user_profile"
              className="imgCircle32px"
              src="images/wanyoung/image/person_pic5.jpg"
              alt="유저사진"
            />
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
