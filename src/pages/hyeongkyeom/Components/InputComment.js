import React from 'react';

const InputComment = ({ onChange, addComment }) => {
  return (
    <form className="feedComment" onSubmit={addComment}>
      <input
        className="inputComment"
        type="text"
        placeholder="댓글 달기..."
        onChange={onChange}
      />
      <button type="submit" className="addComment">
        게시
      </button>
    </form>
  );
};

export default InputComment;
