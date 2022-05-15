import React from 'react';

const PostElements = () => {
  return (
    <>
      <div className="postProfile">
        <div className="userInfo">
          <img
            src="images/younseop/post-user.jpg"
            alt=""
            className="user-photo"
          />
          <span>username</span>
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
        <span className="postUser">username</span>
        <span>위워크에서 진행한 베이킹 클래스</span>
      </div>
    </>
  );
};

export default PostElements;
