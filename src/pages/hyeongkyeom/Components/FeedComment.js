import React from 'react';

const FeedComment = ({ onDeleteBtn, userName, userComment, id }) => {
  const deleteButtonHandler = event => {
    event.preventDefault();
    onDeleteBtn(id);
  };
  return (
    <div className="commentDesc">
      <p className="descNickname">{userName}</p>
      <div className="commentTxt">{userComment}</div>
      <div className="commentBtn">
        <i id="commentLike" class="fa-regular fa-heart" />
        <i class="fa-regular fa-trash-can" onClick={deleteButtonHandler} />
      </div>
    </div>
  );
};

export default FeedComment;
