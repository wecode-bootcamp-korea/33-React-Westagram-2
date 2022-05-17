import React, { useState } from 'react';
import './FeedComment.scss';

const FeedComment = ({ comment, onRemove }) => {
  const { id, text, name } = comment;
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
        />
        <i class="fa-regular fa-trash-can" onClick={() => onRemove(id)} />
      </div>
    </div>
  );
};

export default FeedComment;