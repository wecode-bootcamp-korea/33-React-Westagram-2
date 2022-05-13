import { useState } from 'react';
import './MainFeedBox.scss';

const MainFeedBox = ({ feedUsers }) => {
  const { name, text, imgUrl } = feedUsers;
  const [value, setValue] = useState('');
  const onChange = e => {
    setValue(e.target.value);
    console.log(value);
  };
  return (
    <article className="leftContentFeedBox flex flexDirectionColumn">
      <div className="feedBoxTitle flex flexStart">
        <img
          className="userTitleImg marginLeft"
          src="images/wanyoung/image/person_pic6.jpg"
          alt="유저 프로필 사진"
        />
        <p className="userText marginLeft">{name}</p>
      </div>
      <img className="feedBoxImg" src={imgUrl} alt="피드 사진" />
      <div className="feedItems flex flexStart center">
        <img
          id="feed_heart"
          style={{ color: 'black' }}
          className="marginLeft"
          src="images/wanyoung/image/heart.png"
          alt="좋아요"
        />
        <img
          className="marginLeft"
          src="images/wanyoung/image/chat.png"
          alt="댓글 말풍선"
        />
        <img
          className="marginLeft"
          src="images/wanyoung/image/send.png"
          alt="다이렉트 메세지"
        />
        <div className="feedInnerItems flex marginRight">
          <img src="images/wanyoung/image/mark.png" alt="아이콘" />
        </div>
      </div>
      <div className="flex flexStart">
        <img
          className="imgCircle17px marginLeft"
          src="images/wanyoung/image/person_pic4.jpg"
          alt="좋아요 누른 사람"
        />
        <img
          className="imgCircle17px"
          src="images/wanyoung/image/person_pic6.jpg"
          alt="좋아요 누른 사람"
        />
        <img
          className="imgCircle17px"
          src="images/wanyoung/image/person_pic8.jpg"
          alt="좋아요 누른 사람"
        />
        <p className="userText marginLeft">
          harry_0님 외{' '}
          <span id="count" className="userText">
            60
          </span>
          명이 좋아합니다.
        </p>
      </div>
      <div className="marginTop">
        <p className="marginLeft fontSize14px">
          new_0_person <span className="marginLeft fontSize12px">{text}</span>
        </p>
      </div>

      <div id="comment-content" className="feedComment" />
      <div className="feedDay flex flexStart">
        <p className="marginLeft">1일전</p>
      </div>
      <form className="feedInput flex spaceBetween">
        <img
          className="marginLeft"
          src="images/wanyoung/image/smile.png"
          alt="아이콘"
        />
        <input
          id="comment-input"
          className="marginLeft feedInputInput"
          type="text"
          placeholder="댓글 달기"
          value={value}
          onChange={onChange}
        />
        <button id="comment-button" type="submit" className="fontSize14px">
          게시
        </button>
      </form>
    </article>
  );
};

export default MainFeedBox;
