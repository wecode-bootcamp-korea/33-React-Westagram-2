import React from 'react';

const FeedComment = ({ comment, onRemove }) => {
  const { id, text, name } = comment;

  return (
    <div className="commentDesc">
      <p className="descNickname">{name}</p>
      <div className="commentTxt">{text}</div>
      <div className="commentBtn">
        <i id="commentLike" class="fa-regular fa-heart" />
        <i class="fa-regular fa-trash-can" onClick={() => onRemove(id)} />
      </div>
    </div>
  );
};

export default FeedComment;
