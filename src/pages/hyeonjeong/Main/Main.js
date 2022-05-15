import React from 'react';
import { useState } from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav';
import Comment from './Comment';

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [commentList, setCommentList] = useState([]);

  const isValid = inputValue.length > 0;

  const handleInput = e => {
    setInputValue(e.target.value);
  };

  const post = () => {
    let copy = [...commentList];
    copy.push(inputValue);
    setCommentList(copy);
    setInputValue('');
  };

  return (
    <div className="main">
      <Nav />
      <main className="mainPage">
        <div className="feedAndRight">
          <div className="feedBox">
            <article className="feed">
              <div className="header">
                <div className="profileHeader">
                  <div className="profileImgBox">
                    <img
                      className="roundImg"
                      src="/images/hyeonjeong/IMG_20211020_110139.png"
                      alt=""
                    />
                  </div>
                  <div style={{ fontSize: '20px' }}>cat_1</div>
                </div>
                <div>
                  <i className="fa-solid fa-ellipsis" />
                </div>
              </div>

              <div>
                <img
                  className="mainImg"
                  src="/images/hyeonjeong/낙산고양이이미지.jpg"
                  alt="mainFeedImg"
                />
              </div>

              <div className="iconBox">
                <div>
                  <i className="fa-regular fa-heart" />
                  <i className="fa-regular fa-comment" />
                  <i className="fa-regular fa-paper-plane" />
                </div>
                <div>
                  <i className="fa-regular fa-bookmark" />
                </div>
              </div>

              <div>
                <div className="likeArea margin8px">
                  <div className="likeProfileImg">
                    <img
                      className="roundImg"
                      src="/images/hyeonjeong/카페img.jpg"
                      alt="likeProfileImg"
                    />
                  </div>
                  <div>
                    <span>cafe_01</span>님<span>외 200명</span>이 좋아합니다
                  </div>
                </div>

                <div className="commentBox">
                  <div className="margin4px">
                    <span>cut_cat12</span>
                    <span>귀여운 고양이....</span>
                    <span className="grayColor">더 보기</span>
                  </div>

                  <ul className="commentUl">
                    <li className="commentRow">
                      {commentList.map((item, idx) => {
                        return <Comment item={item} idx={idx} key={idx} />;
                      })}
                    </li>
                  </ul>
                  <div className="margin8px grayColor font10px">1일전</div>
                </div>

                <form className="commentInputBox">
                  <input
                    className="commentInput"
                    type="text"
                    placeholder="댓글 달기..."
                    onChange={handleInput}
                    value={inputValue}
                  />
                  <button
                    type="submit"
                    className={'inputBtn ' + (isValid ? 'activateBtn' : '')}
                    disabled={!isValid}
                    onClick={post}
                  >
                    게시
                  </button>
                </form>
              </div>
            </article>
          </div>

          <aside className="mainRight">
            <div className="myProfileBox">
              <img
                className="profileImg"
                src="/images/hyeonjeong/IMG_20211020_110139.png"
                alt="profile_img"
              />
              <span>lovelycat11</span>
            </div>
            <div className="recommend">
              <span>회원님을 위한 추천</span>
              <a href="#">모두보기</a>
            </div>
            <div className="recommendList">
              <div className="recommendProfile">
                <img
                  className="recommendProfileImg"
                  src="/images/hyeonjeong/카페img.jpg"
                  alt="recommendProfileImg"
                />
                <span className="recommendProfileNickname">I'm_happy</span>
                <span className="follow">팔로우</span>
              </div>
              <div className="recommendProfile">
                <img
                  className="recommendProfileImg"
                  src="/images/hyeonjeong/카페img.jpg"
                  alt="recommendProfileImg"
                />
                <span className="recommendProfileNickname">I'm_happy</span>
                <span className="follow">팔로우</span>
              </div>
              <div className="recommendProfile">
                <img
                  className="recommendProfileImg"
                  src="/images/hyeonjeong/카페img.jpg"
                  alt="recommendProfileImg"
                />
                <span className="recommendProfileNickname">I'm_happy</span>
                <span className="follow">팔로우</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Main;
