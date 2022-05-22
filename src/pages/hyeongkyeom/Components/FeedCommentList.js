import React from 'react';
import FeedComment from './FeedComment';
import './FeedCommentList.scss';

const FeedCommentList = ({ commentList, onRemove }) => {
  return (
    <div className="feedBottomComment">
      {commentList.map(comment => {
        return (
          <FeedComment
            name={comment.name}
            text={comment.text}
            id={comment.id}
            key={comment.id}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
};

export default FeedCommentList;
