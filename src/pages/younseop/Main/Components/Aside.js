import React from 'react';

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
        <div className="story">
          <div className="storyHeader">
            <span className="storyTitle">스토리</span>
            <button className="storyAll">모두 보기</button>
          </div>
          <ul className="storyContents">
            <li className="storyProfile">
              <img
                src="images/younseop/post-user.jpg"
                alt=""
                className="imgUserPhoto"
              />
              <div className="storyTextWrapper">
                <span className="storyName">wecode_1</span>
                <span className="storyTime">16분 전</span>
              </div>
            </li>
            <li className="storyProfile">
              <img
                src="images/younseop/post-user.jpg"
                alt=""
                className="imgUserPhoto"
              />
              <div className="storyTextWrapper">
                <span className="storyName">wecode_1</span>
                <span className="storyTime">16분 전</span>
              </div>
            </li>
            <li className="storyProfile">
              <img
                src="images/younseop/post-user.jpg"
                alt=""
                className="imgUserPhoto"
              />
              <div className="storyTextWrapper">
                <span className="storyName">wecode_1</span>
                <span className="storyTime">16분 전</span>
              </div>
            </li>
            <li className="storyProfile">
              <img
                src="images/younseop/post-user.jpg"
                alt=""
                className="imgUserPhoto"
              />
              <div className="storyTextWrapper">
                <span className="storyName">wecode_1</span>
                <span className="storyTime">16분 전</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="recommendedUser">
          <div className="userListHeader">
            <span className="userListTitle">회원님을 위한 추천</span>
            <button className="userListAll">모두 보기</button>
          </div>
          <ul className="userList">
            <li className="userListItem">
              <div className="listItemInfo">
                <img
                  src="images/younseop/post-user.jpg"
                  alt=""
                  className="imgUserPhoto"
                />
                <div className="storyTextWrapper">
                  <span className="storyName">wecode_1</span>
                  <span className="storyTime">16분 전</span>
                </div>
              </div>
              <button className="userFollow">팔로우</button>
            </li>
            <li className="userListItem">
              <div className="listItemInfo">
                <img
                  src="images/younseop/post-user.jpg"
                  alt=""
                  className="imgUserPhoto"
                />
                <div className="storyTextWrapper">
                  <span className="storyName">wecode_1</span>
                  <span className="storyTime">16분 전</span>
                </div>
              </div>
              <button className="userFollow">팔로우</button>
            </li>
            <li className="userListItem">
              <div className="listItemInfo">
                <img
                  src="images/younseop/post-user.jpg"
                  alt=""
                  className="imgUserPhoto"
                />
                <div className="storyTextWrapper">
                  <span className="storyName">wecode_1</span>
                  <span className="storyTime">16분 전</span>
                </div>
              </div>
              <button className="userFollow">팔로우</button>
            </li>
          </ul>
        </div>
        <footer>
          <p>
            Westagram 정보 · 지원 · 홍보 센터 · API · 채용정보 ·
            개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어
          </p>
          <span>ⓒ 2022 WESTAGRAM</span>
        </footer>
      </div>
    </aside>
  );
};

export default Aside;
