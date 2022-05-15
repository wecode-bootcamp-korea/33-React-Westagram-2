import React from 'react';

const CommentBox = ({ names, comments }) => {
  return (
    <li className="postComment">
      <div>
        <p className="comment">
          <span className="commentUser">{names}</span>
          <span>{comments}</span>
        </p>
      </div>
    </li>
  );
};

export default CommentBox;
