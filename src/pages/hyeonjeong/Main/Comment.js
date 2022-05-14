import React from 'react';

const Comment = ({ item, idx }) => {
  return (
    <div className="commentDel">
      <div className="comment">
        <span className="userPadding">catttt022</span>
        <span>{item}</span>
      </div>
      <button className="delBtn">삭제</button>
    </div>
  );
};

export default Comment;
