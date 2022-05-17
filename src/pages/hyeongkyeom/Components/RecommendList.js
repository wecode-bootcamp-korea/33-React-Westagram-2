import React from 'react';
import './RecommendList.scss';

const RecommendList = ({ src, name }) => {
  return (
    <div className="recommendProfile">
      <div className="recommendProfileOne">
        <img className="recommendImg" src={src} alt="recoImg1" />
        <div className="recommendProfileName">
          <span>{name}</span>
          <p>회원님을 팔로우합니다</p>
        </div>
        <div className="recommendProfileFollow">
          <button className="recommendProfileFollowBtn">팔로우</button>
        </div>
      </div>
    </div>
  );
};

export default RecommendList;
