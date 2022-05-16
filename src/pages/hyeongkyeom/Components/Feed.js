import React, { useRef, useState } from 'react';
import FeedCommentList from './FeedCommentList';
import InputComment from './InputComment';

const Feed = () => {
  const [className, setClassName] = useState('fa-regular fa-heart');
  const [color, setColor] = useState('black');
  const [commentList, setCommentList] = useState([
    { id: 1, name: 'iron_man', text: '너무 귀엽다~' },
    { id: 2, name: 'mighty_thor', text: '나도 강아지 키우고싶다!' },
    { id: 3, name: 'iamgroot', text: '아이엠그루트' },
  ]);
  const nextId = useRef(4);

  const onRemove = id =>
    setCommentList(commentList.filter(comment => comment.id !== id));

  const handleClick = () => {
    let newColor;
    let newClassName;
    if (className === 'fa-regular fa-heart') {
      newColor = 'red';
      newClassName = 'fa-solid fa-heart';
    } else {
      newClassName = 'fa-regular fa-heart';
      newColor = 'black';
    }
    setColor(newColor);
    setClassName(newClassName);
  };

  const onInsert = text => {
    const comment = {
      id: nextId.current,
      name: 'hang_ke_mi',
      text,
    };
    setCommentList(commentList.concat(comment));
    nextId.current += 1;
  };

  return (
    <>
      <article className="mainFeed">
        <div className="feedProfile">
          <img
            className="feedProfileImg"
            src="images/hyeongkyeom/main/mainProfile.jpeg"
            alt="feedProfileImg"
          />
          <div className="feedProfileName">
            <p className="feedProfileId">hang_ke_mi</p>
            <p className="feedProfileLocation">WeCode - 위코드</p>
          </div>
          <i id="feedProfileMore" className="fa-solid fa-ellipsis" />
        </div>
        <div className="feedmainImg" onDoubleClick={handleClick}>
          <img
            className="yeonTan"
            src="images/hyeongkyeom/main/feedImage.jpeg"
            alt="feedImg"
          />
        </div>
        <div className="feedBottom">
          <div className="feedBottomLikes">
            <div className="feedBottomLikesIcon">
              <div className="feedBottomLikesIconLeft">
                <i
                  id="feedHeartBtn"
                  className={className}
                  style={{ color: color }}
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
                className="WhoLikesProfile"
                src="images/hyeongkyeom/main/wecode.png"
                alt="feedLikeImg"
              />
              <span className="like_txt">
                <b>wecode_bootcamp</b>님 <b>외 여러 명</b>이 좋아합니다
              </span>
            </div>
          </div>
          <div className="feedBottomDesc">
            <span className="descNickname">
              <b>hang_ke_mi</b>
            </span>
            <span className="descTxt">연탄이 커여웡! 🥰</span>
          </div>
        </div>
        <FeedCommentList commentList={commentList} onRemove={onRemove} />
      </article>
      <InputComment onInsert={onInsert} />
    </>
  );
};

export default Feed;
