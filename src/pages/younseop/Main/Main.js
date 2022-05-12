import React from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav.js';

function Main() {
  return (
    <>
      <Nav />
      <div className="main">
        <section>
          <div className="feeds">
            <article className="post">
              <div className="post-profile">
                <div className="user-info">
                  <img
                    src="public/images/younseop/post-user.jpg"
                    alt=""
                    className="user-photo"
                  />
                  <span>username</span>
                </div>
                <img
                  className="more-icon"
                  src="public/images/younseop/more-icon.svg"
                  alt=""
                />
              </div>
              <div className="img-wrapper">
                <img src="public/images/younseop/post-user.jpg" alt="" />
              </div>
              <div className="btns-wrapper">
                <div className="left-ic-wrapper">
                  <button className="like-btn">
                    <img
                      src="public/images/younseop/heart-regular.svg"
                      alt=""
                    />
                  </button>
                  <button className="comment-btn">
                    <img src="public/images/younseop/comment.svg" alt="" />
                  </button>
                  <button className="share-btn">
                    <img src="public/images/younseop/share.svg" alt="" />
                  </button>
                </div>
                <button className="bookmark-btn">
                  <img src="public/images/younseop/bookmark.svg" alt="" />
                </button>
              </div>
              <div className="like-list">
                <img
                  src="public/images/younseop/post-user.jpg"
                  alt=""
                  className="user-photo"
                />
                <div className="like-list-text">
                  <span className="like-user">wecode</span>
                  <span>님</span>
                  <span className="like-number">&nbsp외 10명</span>
                  <span>이 좋아합니다.</span>
                </div>
              </div>
              <div className="desc-wrapper">
                <span className="post-user">username</span>
                <span>위워크에서 진행한 베이킹 클래스</span>
              </div>
              <ul className="comments-wrapper">
                <li className="post-comment">
                  <div>
                    <p className="comment">
                      <span className="comment-user">seop</span>
                      <span>GOOD</span>
                    </p>
                  </div>
                </li>
              </ul>
              <p className="post-time">42분 전</p>
              <form method="post" className="write-comment">
                <input className="write-area" placeholder="댓글 달기..." />
                <button type="submit" id="submit" disabled>
                  게시
                </button>
              </form>
            </article>
          </div>
          <aside className="main-right">
            <div className="aside-wrapper">
              <div className="profile">
                <img
                  src="public/images/younseop/post-user.jpg"
                  alt=""
                  className="user-photo"
                />
                <div className="profile-text-wrapper">
                  <span className="profile-name">wecode_bootcamp</span>
                  <span className="profile-location">Wecode | 위코드</span>
                </div>
              </div>
              <div className="story">
                <div className="story-header">
                  <span className="story-title">스토리</span>
                  <button className="story-all">모두 보기</button>
                </div>
                <ul className="story-contents">
                  <li className="story-profile">
                    <img
                      src="public/images/younseop/post-user.jpg"
                      alt=""
                      className="user-photo"
                    />
                    <div className="story-text-wrapper">
                      <span className="story-name">wecode_1</span>
                      <span className="story-time">16분 전</span>
                    </div>
                  </li>
                  <li className="story-profile">
                    <img
                      src="public/images/younseop/post-user.jpg"
                      alt=""
                      className="user-photo"
                    />
                    <div className="story-text-wrapper">
                      <span className="story-name">wecode_1</span>
                      <span className="story-time">16분 전</span>
                    </div>
                  </li>
                  <li className="story-profile">
                    <img
                      src="public/images/younseop/post-user.jpg"
                      alt=""
                      className="user-photo"
                    />
                    <div className="story-text-wrapper">
                      <span className="story-name">wecode_1</span>
                      <span className="story-time">16분 전</span>
                    </div>
                  </li>
                  <li className="story-profile">
                    <img
                      src="public/images/younseop/post-user.jpg"
                      alt=""
                      className="user-photo"
                    />
                    <div className="story-text-wrapper">
                      <span className="story-name">wecode_1</span>
                      <span className="story-time">16분 전</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="recommended-user">
                <div className="user-list-header">
                  <span className="user-list-title">회원님을 위한 추천</span>
                  <button className="user-list-all">모두 보기</button>
                </div>
                <ul className="user-list">
                  <li className="user-list-item">
                    <div className="list-item-info">
                      <img
                        src="public/images/younseop/post-user.jpg"
                        alt=""
                        className="user-photo"
                      />
                      <div className="story-text-wrapper">
                        <span className="story-name">wecode_1</span>
                        <span className="story-time">16분 전</span>
                      </div>
                    </div>
                    <button className="user-follow">팔로우</button>
                  </li>
                  <li className="user-list-item">
                    <div className="list-item-info">
                      <img
                        src="public/images/younseop/post-user.jpg"
                        alt=""
                        className="user-photo"
                      />
                      <div className="story-text-wrapper">
                        <span className="story-name">wecode_1</span>
                        <span className="story-time">16분 전</span>
                      </div>
                    </div>
                    <button className="user-follow">팔로우</button>
                  </li>
                  <li className="user-list-item">
                    <div className="list-item-info">
                      <img
                        src="public/images/younseop/post-user.jpg"
                        alt=""
                        className="user-photo"
                      />
                      <div className="story-text-wrapper">
                        <span className="story-name">wecode_1</span>
                        <span className="story-time">16분 전</span>
                      </div>
                    </div>
                    <button className="user-follow">팔로우</button>
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
        </section>
      </div>
    </>
  );
}

export default Main;
