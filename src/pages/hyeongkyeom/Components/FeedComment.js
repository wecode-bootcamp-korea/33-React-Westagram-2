import React from 'react';

const FeedComment = props => {
  return (
    <div className="commentDesc">
      <p className="descNickname">{props.userName}</p>
      <div className="commentTxt">{props.userComment}</div>
      <div className="commentBtn">
        <i id="commentLike" class="fa-regular fa-heart" />
      </div>
    </div>
  );
};

export default FeedComment;
