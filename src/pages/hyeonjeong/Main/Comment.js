import React from 'react';

const Comment = props => {
  const removeComment = e => {
    let copy = [...props.commentList];
    props.setCommentList(copy.filter(item => item.id != e.target.id));
  };
  return (
    <li className="commentRow">
      <div className="comment">
        <span className="userPadding idFontWeight">{props.item.userName}</span>
        <span>{props.item.content}</span>
      </div>
      <button className="delBtn" onClick={removeComment} id={props.item.id}>
        삭제
      </button>
    </li>
  );
};

export default Comment;
