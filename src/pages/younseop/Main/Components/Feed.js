import React, { useState, useEffect } from 'react';
import CommentBox from './Comments';

const Feed = () => {
  const [input, setInput] = useState('');
  const [comment, setComment] = useState([]);
  // FIXME: post 복수형
  const [posts, setPosts] = useState([]);

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleUpload = e => {
    e.preventDefault();
    // FIXME: push 사용 안해도 됨
    const newComment = [...comment];
    newComment.push(input);
    setComment(newComment);
    setInput('');
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/younseop/post.json')
      .then(response => response.json())
      .then(result => setPost(result));
  }, []);

  return (
    <div className="feeds">
      {/* FIXME: 매개변수 구조분해 */}
      {posts.map(({id, username}) => {
        return (
          <article className="post" key={id}>
            <div className="postProfile">
              <div className="userInfo">
                <img
                  src="/images/younseop/post-user.jpg"
                  alt="user"
                  className="user-photo"
                />
                <span>{username}</span>
              </div>
              <img
                className="iconNamedMore"
                src="images/younseop/more-icon.svg"
                alt=""
              />
            </div>
            <div className="imgWrapper">
              <img src="images/younseop/post-user.jpg" alt="" />
            </div>
            <div className="btnsWrapper">
              <div className="left-ic-wrapper">
                <button className="btnNamedLike">
                  <img src="images/younseop/heart-regular.svg" alt="" />
                </button>
                <button className="btnNamedComment">
                  <img src="images/younseop/comment.svg" alt="" />
                </button>
                <button className="btnNamedShare">
                  <img src="images/younseop/share.svg" alt="" />
                </button>
              </div>
              <button className="btnNamedBookmark">
                <img src="images/younseop/bookmark.svg" alt="" />
              </button>
            </div>
            <div className="likeList">
              <img
                src="images/younseop/post-user.jpg"
                alt=""
                className="user-photo"
              />
              <div className="likeListText">
                <span className="likeUser">wecode</span>
                <span>님</span>
                <span className="likeNumber">외 10명</span>
                <span>이 좋아합니다.</span>
              </div>
            </div>
            <div className="descWrapper">
              <span className="postUser">{info.username}</span>
              <span>{info.comment}</span>
            </div>
            <ul className="commentsWrapper">
              {comment.map((comment, id) => {
                return (
                  <CommentBox names="unknown" comments={comment} id={id} />
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
        );
      })}
    </div>
  );
};

export default Feed;
