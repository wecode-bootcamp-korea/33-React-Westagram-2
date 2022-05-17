import React from 'react';
import './Main.scss';

const CommentBox = ({ names, comments }) => {
  return (
    <li className="postComment">
      <ul>
        <p className="articleComment">
          <span className="commentId">{names}</span>
          <span>{comments}</span>
        </p>
      </ul>
    </li>
  );
};

export default CommentBox;
