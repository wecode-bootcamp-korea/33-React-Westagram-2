import React from 'react';
import './Nav.scss';
const Nav = () => {
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
          <button>
            <img src="images/wanyoung/image/home.png" alt="아이콘" />
          </button>
          <button>
            <img src="images/wanyoung/image/send.png" alt="아이콘" />
          </button>
          <button>
            <img src="images/wanyoung/image/more.png" alt="아이콘" />
          </button>
          <button>
            <img src="images/wanyoung/image/compass.png" alt="아이콘" />
          </button>
          <button>
            <img src="images/wanyoung/image/heart.png" alt="아이콘" />
          </button>
          <button>
            <img
              id="user_profile"
              className="imgCircle32px"
              src="images/wanyoung/image/person_pic5.jpg"
              alt="유저사진"
            />
          </button>
          <div
            id="hidden_nav"
            className="hiddenNavBar flex flexDirectionColumn spaceAround positionAbsolute hidden"
          >
            <div className="flex flexDirectionColumn spaceAround hiddenNavItem">
              <div className="hiddenNavImgWrapper marginLeft flex flexStart">
                <img
                  className="hiddenNavBarImg"
                  src="images/wanyoung/image/feed_user.png"
                  alt="유저사진"
                />
                <p className="fontSize14px">프로필</p>
              </div>
              <div className="hiddenNavImgWrapper marginLeft flex flexStart">
                <img
                  className="hiddenNavBarImg"
                  src="images/wanyoung/image/mark.png"
                  alt="유저사진"
                />
                <p className="fontSize14px">저장됨</p>
              </div>
              <div className="hiddenNavImgWrapper marginLeft flex flexStart">
                <img
                  className="hiddenNavBarImg"
                  src="images/wanyoung/image/feed_user.png"
                  alt="유저사진"
                />
                <p className="fontSize14px">설정</p>
              </div>
              <div className="hiddenNavImgWrapper marginLeft flex flexStart">
                <img
                  className="hiddenNavBarImg"
                  src="images/wanyoung/image/feed_user.png"
                  alt="유저사진"
                />
                <p className="fontSize14px">계정전환</p>
              </div>
            </div>
            <div className="hiddenNavImgWrapper marginLeft flex flexStart">
              <p className="fontSize14px">로그아웃</p>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
