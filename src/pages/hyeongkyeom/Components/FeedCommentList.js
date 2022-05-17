import React from 'react';
import FeedComment from './FeedComment';
import './FeedCommentList.scss';

const FeedCommentList = ({ commentList, onRemove }) => {
  return (
    <div className="feedBottomComment">
      {commentList.map(comment => {
        return (
          <FeedComment comment={comment} key={comment.id} onRemove={onRemove} />
        );
      })}
    </div>
  );
};

export default FeedCommentList;