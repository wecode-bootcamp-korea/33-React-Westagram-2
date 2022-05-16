import React, { useState } from 'react';

const InputComment = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    onInsert(value);
    setValue('');

    e.preventDefault();
  };

  return (
    <form className="feedComment" onSubmit={onSubmit}>
      <input
        className="inputComment"
        type="text"
        placeholder="댓글 달기..."
        value={value}
        onChange={onChange}
      />
      <button type="submit" className="addComment">
        게시
      </button>
    </form>
  );
};

export default InputComment;
