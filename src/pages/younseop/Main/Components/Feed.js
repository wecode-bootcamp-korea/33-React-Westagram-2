import React from 'react';
import { useState } from 'react';
import CommentBox from './Comments';

const Feed = () => {
  const [input, setInput] = useState('');
  const [comment, setComment] = useState([]);

  // POST 1
  // input comment
  // POST 2
  // input comment

  // Feeds -> Feed (input, comment) -> CommentBox

  // Feeds -> POST_LIST Feed
  // Feed ->
  // Comment ->

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
    <div className="feeds">
      {POST_LIST.map(info => {
        return (
          <article className="post" key={info.id}>
            <div className="postProfile">
              <div className="userInfo">
                <img
                  src="images/younseop/post-user.jpg"
                  alt=""
                  className="user-photo"
                />
                <span>{info.username}</span>
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
        );
      })}
    </div>
  );
};

const POST_LIST = [
  { id: 1, username: 'younseop', comment: '그리운 제주도...' },
  { id: 2, username: 'devseop', comment: '자바스크립트는 나의 적' },
  { id: 3, username: 'dldbstjq', comment: '집에 가고 싶다' },
];

export default Feed;
