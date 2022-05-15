import React from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav';
import CommentBox from './Components/Comments';
import { useState } from 'react';

function Main() {
  const [input, setInput] = useState('');
  const [comment, setComment] = useState([]);

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleUpload = e => {
    e.preventDefault();
    const newComment = [...comment];
    newComment.push(input);
    setComment(newComment);
    setInput('');
  };

  return (
    <>
      <Nav />
      <div className="main">
        <section>
          <div className="feeds">
            <article className="post">
              <div className="postProfile">
                <div className="userInfo">
                  <img
                    src="images/younseop/post-user.jpg"
                    alt=""
                    className="user-photo"
                  />
                  <span>username</span>
                </div>
                <img
                  className="iconNamedMore"
                  src="images/younseop/more-icon.svg"
                  alt=""
                />
              </div>
              <div className="imgWrapper">
                <img src="images/younseop/post-user.jpg" alt="" />
              </div>
              <div className="btnsWrapper">
                <div className="left-ic-wrapper">
                  <button className="btnNamedLike">
                    <img src="images/younseop/heart-regular.svg" alt="" />
                  </button>
                  <button className="btnNamedComment">
                    <img src="images/younseop/comment.svg" alt="" />
                  </button>
                  <button className="btnNamedShare">
                    <img src="images/younseop/share.svg" alt="" />
                  </button>
                </div>
                <button className="btnNamedBookmark">
                  <img src="images/younseop/bookmark.svg" alt="" />
                </button>
              </div>
              <div className="likeList">
                <img
                  src="images/younseop/post-user.jpg"
                  alt=""
                  className="user-photo"
                />
                <div className="likeListText">
                  <span className="likeUser">wecode</span>
                  <span>님</span>
                  <span className="likeNumber">외 10명</span>
                  <span>이 좋아합니다.</span>
                </div>
              </div>
              <div className="descWrapper">
                <span className="postUser">username</span>
                <span>위워크에서 진행한 베이킹 클래스</span>
              </div>
              <ul className="commentsWrapper">
                {comment.map((comment, id) => {
                  return (
                    <CommentBox names="unknown" comments={comment} key={id} />
                  );
                })}
              </ul>
              <p className="postTime">42분 전</p>
              <form
                method="post"
                className="writeComment"
                onSubmit={handleUpload}
              >
                <input
                  type="text"
                  className="writeArea"
                  placeholder="댓글 달기..."
                  value={input}
                  onChange={handleInputChange}
                />
                <button
                  type="submit"
                  id="submit"
                  disabled={input.length > 0 ? false : true}
                >
                  게시
                </button>
              </form>
            </article>
          </div>
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
        </section>
      </div>
    </>
  );
}

export default Main;
