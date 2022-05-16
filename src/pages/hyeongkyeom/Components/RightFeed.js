import React from 'react';
import './RightFeed.scss';

const RightFeed = () => {
  return (
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
                <button className="recommendProfileFollowBtn">팔로우</button>
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
                <button className="recommendProfileFollowBtn">팔로우</button>
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
                <button className="recommendProfileFollowBtn">팔로우</button>
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
                <button className="recommendProfileFollowBtn">팔로우</button>
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
                <button className="recommendProfileFollowBtn">팔로우</button>
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
                <button className="recommendProfileFollowBtn">팔로우</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RightFeed;
