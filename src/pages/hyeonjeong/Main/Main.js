import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      {/* <div className="navContainer">
        <nav>
          <div className="navItemBox">
            <img
              className="iconSize"
              src="/images/instagram.png"
              alt="instagram-icon"
            />
            <span>|</span>
            <a className="westaLogo" href="#">
              Westagram
            </a>
          </div>

          <div className="navItemBox">
            <input className="searchIdInput" type="text" placeholder="검색" />
          </div>

          <div className="navItemBox navIcon">
            <img
              className="iconSize"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt=""
            />
            <img
              className="iconSize"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt=""
            />
            <img
              className="iconSize"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt=""
            />
          </div>
        </nav>
      </div> */}

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
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>

              <div>
                <img
                  className="mainImg"
                  src="/images/hyeonjeong/낙산고양이이미지.jpg"
                  alt=""
                />
              </div>

              <div className="iconBox">
                <div>
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-regular fa-comment"></i>
                  <i className="fa-regular fa-paper-plane"></i>
                </div>
                <div>
                  <i className="fa-regular fa-bookmark"></i>
                </div>
              </div>

              <div>
                <div className="likeArea margin8px">
                  <div className="likeProfileImg">
                    <img
                      className="roundImg"
                      src="/images/hyeonjeong/카페img.jpg"
                      alt=""
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
                    <span>더 보기</span>
                  </div>
                  <div>mimini123 균형감각 뛰어난 낙산공원 고양이</div>
                  <ul className="commentUl">
                    <li className="commentRow">
                      <div className="commentDel">
                        <div className="comment">
                          <span className="user-padding">catttt022</span>
                          <span className="comment-area">
                            고양이는 다 귀여워
                          </span>
                        </div>

                        <button className="delBtn">삭제</button>
                      </div>
                    </li>
                  </ul>
                  <div className="margin8px">1일전</div>
                </div>

                <div className="commentInputBox">
                  <input
                    className="commentInput"
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <button className="inputBtn" disabled>
                    게시
                  </button>
                </div>
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
                  alt=""
                />
                <span className="recommendProfileNickname">I'm_happy</span>
                <span className="follow">팔로우</span>
              </div>
              <div className="recommendProfile">
                <img
                  className="recommendProfileImg"
                  src="/images/hyeonjeong/카페img.jpg"
                  alt=""
                />
                <span className="recommendProfileNickname">I'm_happy</span>
                <span className="follow">팔로우</span>
              </div>
              <div className="recommendProfile">
                <img
                  className="recommendProfileImg"
                  src="/images/hyeonjeong/카페img.jpg"
                  alt=""
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
