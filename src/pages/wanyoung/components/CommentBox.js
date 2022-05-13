import Comment from './Comment';

const CommentBox = ({ comments, onRemove }) => {
  return (
    <div id="comment-content" className="feedComment">
      {comments.map(comment => (
        <Comment key={comment.id} comments={comment} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default CommentBox;
