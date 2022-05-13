import './Comment.scss';

const Comment = ({ comments, onRemove }) => {
  const { id, name, text } = comments;
  return (
    <div className="Comment">
      {name} : {text}
      <button className="btn" onClick={() => onRemove(id)}>
        x
      </button>
    </div>
  );
};

export default Comment;
