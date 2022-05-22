import React, { useState } from 'react';
import './FeedComment.scss';

const FeedComment = ({ id, text, name, liked, onRemove }) => {
  const [likedBtn, setlikedBtn] = useState(false);

  const likeButton = e => {
    e.preventDefault();
    e.target.style.color = likedBtn ? 'red' : 'black';
    e.target.className = likedBtn ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    setlikedBtn(!likedBtn);
  };

  return (
    <div className="commentDesc">
      <p className="descNickname">{name}</p>
      <div className="commentTxt">{text}</div>
      <div className="commentBtn">
        <i
          id="commentLike"
          className="fa-regular fa-heart"
          onClick={likeButton}
          liked={liked}
        />
        <i className="fa-regular fa-trash-can" onClick={() => onRemove(id)} />
      </div>
    </div>
  );
};

export default FeedComment;
