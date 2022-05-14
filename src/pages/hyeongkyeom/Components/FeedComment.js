import React from 'react';

const FeedComment = props => {
  const { userName, userComment } = props;

  return (
    <div className="commentDesc">
      <p className="descNickname">{userName}</p>
      <div className="commentTxt">{userComment}</div>
      <div className="commentBtn">
        <i id="commentLike" class="fa-regular fa-heart" />
      </div>
    </div>
  );
};

export default FeedComment;
