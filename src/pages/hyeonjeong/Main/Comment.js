import React from 'react';

const Comment = ({ item, idx, remove }) => {
  return (
    <div className="commentDel">
      <div className="comment">
        <span className="userPadding">catttt022</span>
        <span>{item}</span>
      </div>
      <button className="delBtn" id={idx}>
        삭제
      </button>
    </div>
  );
};

export default Comment;
