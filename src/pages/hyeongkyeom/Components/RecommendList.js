import React, { useState } from 'react';
import './RecommendList.scss';

const RecommendList = ({ src, name }) => {
  const [followed, setFollowed] = useState(false);
  const [text, setText] = useState('팔로우');

  const followButton = e => {
    e.preventDefault();
    e.target.style.color = followed ? 'black' : '#3b99ef';
    setText(followed ? '팔로잉' : '팔로우');
    setFollowed(!followed);
  };

  return (
    <div className="recommendProfile">
      <div className="recommendProfileOne">
        <img className="recommendImg" src={src} alt="recoImg1" />
        <div className="recommendProfileName">
          <span>{name}</span>
          <p>회원님을 팔로우합니다</p>
        </div>
        <div className="recommendProfileFollow">
          <button
            className="recommendProfileFollowBtn"
            followed="false"
            onClick={followButton}
          >
            {text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendList;
