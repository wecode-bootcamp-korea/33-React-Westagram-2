import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <section className="mainWrapper">
        <div className="feeds">
          <div className="mainStory">
            <section className="storyBorder">
              <div className="storyProfile">
                <div className="storyProfileOne">
                  <img
                    className="storyImg"
                    src="images/hyeongkyeom/profile/pro1.jpeg"
                    alt="storyImg1"
                  />
                  <div className="storyProfileName">
                    <span>all.about.seoul.trip</span>
                  </div>
                </div>
                <div className="storyProfileOne">
                  <img
                    className="storyImg"
                    src="images/hyeongkyeom/profile/pro2.jpeg"
                    alt="storyImg2"
                  />
                  <div className="storyProfileName">
                    <span>kangnam11</span>
                  </div>
                </div>
                <div className="storyProfileOne">
                  <img
                    className="storyImg"
                    src="images/hyeongkyeom/profile/pro3.jpeg"
                    alt="storyImg3"
                  />
                  <div className="storyProfileName">
                    <span>nyamnyamang</span>
                  </div>
                </div>
                <div className="storyProfileOne">
                  <img
                    className="storyImg"
                    src="images/hyeongkyeom/profile/pro6.jpeg"
                    alt="storyImg4"
                  />
                  <div className="storyProfileName">
                    <span>all.about.20s</span>
                  </div>
                </div>
                <div className="storyProfileOne">
                  <img
                    className="storyImg"
                    src="images/hyeongkyeom/profile/pro4.jpeg"
                    alt="storyImg5"
                  />
                  <div className="storyProfileName">
                    <span>seoultravel</span>
                  </div>
                </div>
                <div className="storyProfileOne">
                  <img
                    className="storyImg"
                    src="images/hyeongkyeom/profile/pro5.jpeg"
                    alt="storyImg6"
                  />
                  <div className="storyProfileName">
                    <span>datecourse123</span>
                  </div>
                </div>
                <div className="storyProfileOne">
                  <img
                    className="storyImg"
                    src="images/hyeongkyeom/profile/pro6.jpeg"
                    alt="storyImg7"
                  />
                  <div className="storyProfileName">
                    <span>leagueoflegend</span>
                  </div>
                </div>
                <div className="storyProfileOne">
                  <img
                    className="storyImg"
                    src="images/hyeongkyeom/profile/pro1.jpeg"
                    alt="storyImg8"
                  />
                  <div className="storyProfileName">
                    <span>love_doong.doong</span>
                  </div>
                </div>
                <div className="storyProfileOne">
                  <img
                    className="storyImg"
                    src="images/hyeongkyeom/profile/pro2.jpeg"
                    alt="storyImg9"
                  />
                  <div className="storyProfileName">
                    <span>marvelkorea</span>
                  </div>
                </div>
                <div className="storyProfileOne">
                  <img
                    className="storyImg"
                    src="images/hyeongkyeom/profile/pro3.jpeg"
                    alt="storyImg10"
                  />
                  <div className="storyProfileName">
                    <span>cheongjeul</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <article className="mainFeed">
            <div className="feedProfile">
              <img
                className="feedProfileImg"
                src="images/hyeongkyeom/main/mainProfile.jpeg"
                alt="feedProfileImg"
              />
              <div className="feedProfileName">
                <p className="feedProfileId">
                  <b>hang_ke_mi</b>
                </p>
                <p className="feedProfileLocation">WeCode - 위코드</p>
              </div>
              <i id="feedProfileMore" className="fa-solid fa-ellipsis" />
            </div>
            <div className="feedmainImg">
              <img
                className="yeonTan"
                src="images/hyeongkyeom/main/feedImage.jpeg"
                alt="feedImg"
              />
            </div>
            <div className="feedBottom">
              <div className="feedBottomLikes">
                <div className="feedBottomLikesIcon">
                  <div className="feedBottomLikesIconLeft">
                    <i id="feedHeartBtn" className="fa-regular fa-heart" />
                    <i className="fa-regular fa-comment" />
                    <i className="fa-solid fa-arrow-up-from-bracket" />
                  </div>
                  <div className="feedBottomLkesIconRight">
                    <i className="fa-regular fa-bookmark" />
                  </div>
                </div>
                <div className="feedBottomWhoLikes">
                  <img
                    className="WhoLikesProfile"
                    src="images/hyeongkyeom/main/wecode.png"
                    alt="feedLikeImg"
                  />{' '}
                  <span className="like_txt">
                    <b>wecode_bootcamp</b>님 <b>외 여러 명</b>이 좋아합니다
                  </span>
                </div>
              </div>
              <div className="feedBottomDesc">
                <span className="descNickname">
                  <b>hang_ke_mi</b>
                </span>
                <span className="descTxt">연탄이 커여웡! 🥰</span>
              </div>
              <div className="feedBottomComment" />
            </div>
          </article>
          <div className="feedComment">
            <input
              className="inputComment"
              type="text"
              placeholder="댓글 달기..."
            />
            <button className="addComment" disabled>
              게시
            </button>
          </div>
        </div>
        <div className="mainRight">
          <div className="mainProfile">
            <img
              className="mainProfileImg"
              src="images/hyeongkyeom/main/mainProfile.jpeg"
              alt="mainProImg"
            />
            <div className="mainProfileName">
              <span>
                <b>hang_ke_mi</b>
              </span>
              <p>김형겸</p>
            </div>
          </div>

          <div className="mainRecommend">
            <section className="recommendBorder">
              <div className="recommendBorderTitle">
                <span>회원님을 위한 추천</span>{' '}
                <span>
                  <b>모두 보기</b>
                </span>
              </div>

              <div className="recommendProfile">
                <div className="recommendProfileOne">
                  <img
                    className="recommendImg"
                    src="images/hyeongkyeom/profile/pro4.jpeg"
                    alt="recoImg1"
                  />
                  <div className="recommendProfileName">
                    <span>
                      <b>insight.co.kr</b>
                    </span>
                    <p>회원님을 팔로우합니다</p>
                  </div>
                  <div className="recommendProfileFollow">
                    <button className="recommendProfileFollowBtn">
                      팔로우
                    </button>
                  </div>
                </div>

                <div className="recommendProfileOne">
                  <img
                    className="recommendImg"
                    src="images/hyeongkyeom/profile/pro5.jpeg"
                    alt="recoImg2"
                  />
                  <div className="recommendProfileName">
                    <span>
                      <b>greedeat</b>
                    </span>
                    <p>회원님을 팔로우합니다</p>
                  </div>
                  <div className="recommendProfileFollow">
                    <button className="recommendProfileFollowBtn">
                      팔로우
                    </button>
                  </div>
                </div>
                <div className="recommendProfileOne">
                  <img
                    className="recommendImg"
                    src="images/hyeongkyeom/profile/pro6.jpeg"
                    alt="recoImg3"
                  />
                  <div className="recommendProfileName">
                    <span>
                      <b>jmt_zero</b>
                    </span>
                    <p>회원님을 팔로우합니다</p>
                  </div>
                  <div className="recommendProfileFollow">
                    <button className="recommendProfileFollowBtn">
                      팔로우
                    </button>
                  </div>
                </div>
                <div className="recommendProfileOne">
                  <img
                    className="recommendImg"
                    src="images/hyeongkyeom/profile/pro1.jpeg"
                    alt="recoImg4"
                  />
                  <div className="recommendProfileName">
                    <span>
                      <b>seoulhotple</b>
                    </span>
                    <p>회원님을 팔로우합니다</p>
                  </div>
                  <div className="recommendProfileFollow">
                    <button className="recommendProfileFollowBtn">
                      팔로우
                    </button>
                  </div>
                </div>
                <div className="recommendProfileOne">
                  <img
                    className="recommendImg"
                    src="images/hyeongkyeom/profile/pro2.jpeg"
                    alt="recoImg5"
                  />
                  <div className="recommendProfileName">
                    <span>
                      <b>kangseo99</b>
                    </span>
                    <p>회원님을 팔로우합니다</p>
                  </div>
                  <div className="recommendProfileFollow">
                    <button className="recommendProfileFollowBtn">
                      팔로우
                    </button>
                  </div>
                </div>
                <div className="recommendProfileOne">
                  <img
                    className="recommendImg"
                    src="images/hyeongkyeom/profile/pro3.jpeg"
                    alt="recoImg6"
                  />
                  <div className="recommendProfileName">
                    <span>
                      <b>kangnam11</b>
                    </span>
                    <p>회원님을 팔로우합니다</p>
                  </div>
                  <div className="recommendProfileFollow">
                    <button className="recommendProfileFollowBtn">
                      팔로우
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
