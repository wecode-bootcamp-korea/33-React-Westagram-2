import React from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav';
import PostElements from './Components/PostElements';
import Aside from './Components/Aside';
import CommentBox from './Components/Comments';
import { useState } from 'react';

function Main() {
  const [input, setInput] = useState('');
  const [comment, setComment] = useState([]);

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleUpload = e => {
    e.preventDefault();
    const newComment = [...comment];
    newComment.push(input);
    setComment(newComment);
    setInput('');
  };

  return (
    <>
      <Nav />
      <div className="main">
        <section>
          <div className="feeds">
            <article className="post">
              <PostElements />
              <ul className="commentsWrapper">
                {comment.map((comment, id) => {
                  return (
                    <CommentBox names="unknown" comments={comment} key={id} />
                  );
                })}
              </ul>
              <p className="postTime">42분 전</p>
              <form
                method="post"
                className="writeComment"
                onSubmit={handleUpload}
              >
                <input
                  type="text"
                  className="writeArea"
                  placeholder="댓글 달기..."
                  value={input}
                  onChange={handleInputChange}
                />
                <button
                  type="submit"
                  id="submit"
                  disabled={input.length > 0 ? false : true}
                >
                  게시
                </button>
              </form>
            </article>
          </div>
          <Aside />
        </section>
      </div>
    </>
  );
}

export default Main;
