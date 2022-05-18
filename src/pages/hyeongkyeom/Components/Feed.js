import React, { useRef, useState } from 'react';
import FeedCommentList from './FeedCommentList';
import InputComment from './InputComment';
import './Feed.scss';

const Feed = ({ profile, name, text, src, comment }) => {
  const [color, setColor] = useState(false);
  const [commentList, setCommentList] = useState(comment);
  const nextId = useRef(4);

  const onRemove = id =>
    setCommentList(commentList.filter(comment => comment.id !== id));

  const handleClick = e => {
    e.preventDefault();
    e.target.style.color = color ? 'red' : 'black';
    e.target.className = color ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    setColor(!color);
  };

  const onInsert = text => {
    const comment = {
      id: nextId.current,
      name: 'hang_ke_mi',
      text,
    };
    if (text.length !== 0) {
      setCommentList(commentList.concat(comment));
      nextId.current += 1;
    }
  };

  return (
    <>
      <article className="mainFeed">
        <div className="feedProfile">
          <img className="feedProfileImg" src={profile} alt="feedProfileImg" />
          <div className="feedProfileName">
            <p className="feedProfileId">{name}</p>
            <p className="feedProfileLocation">WeCode - 위코드</p>
          </div>
          <i id="feedProfileMore" className="fa-solid fa-ellipsis" />
        </div>
        <div className="feedmainImg">
          <img className="yeonTan" src={src} alt="feedImg" />
        </div>
        <div className="feedBottom">
          <div className="feedBottomLikes">
            <div className="feedBottomLikesIcon">
              <div className="feedBottomLikesIconLeft">
                <i
                  id="feedHeartBtn"
                  className="fa-regular fa-heart"
                  onClick={handleClick}
                />
                <i className="fa-regular fa-comment" />
                <i class="fa-regular fa-paper-plane" />
              </div>
              <div className="feedBottomLkesIconRight">
                <i className="fa-regular fa-bookmark" />
              </div>
            </div>
            <div className="feedBottomWhoLikes">
              <img
                className="whoLikesProfile"
                src="images/hyeongkyeom/main/wecode.png"
                alt="feedLikeImg"
              />
              <span className="likeTxt">
                <b>wecode_bootcamp</b>님 <b>외 여러 명</b>이 좋아합니다
              </span>
            </div>
          </div>
          <div className="feedBottomDesc">
            <span className="descNickname">
              <b>{name}</b>
            </span>
            <span className="descTxt">{text}</span>
          </div>
        </div>
        <FeedCommentList commentList={commentList} onRemove={onRemove} />
      </article>
      <InputComment onInsert={onInsert} />
    </>
  );
};

export default Feed;
