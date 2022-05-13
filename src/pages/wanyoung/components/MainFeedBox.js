import { useState, useRef } from 'react';
import './MainFeedBox.scss';
import CommentBox from './CommentBox';

const MainFeedBox = ({ feedUsers }) => {
  const { name, text, imgUrl } = feedUsers;
  const [value, setValue] = useState('');
  const nextId = useRef(2);
  const [comments, setComment] = useState([]);
  const [heartImg, setHeartImg] = useState({
    checked: false,
    url: 'images/wanyoung/image/heart.png',
  });
  const onHeartClick = () => {
    setHeartImg({
      checked: !heartImg.checked,
      url: heartImg.checked
        ? 'images/wanyoung/image/heart_red.png'
        : 'images/wanyoung/image/heart.png',
    });
  };

  const onRemove = id => {
    setComment(comments.filter(comment => comment.id !== id));
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    const newComment = {
      id: nextId.current,
      name: 'wan_0_kim',
      text: value,
    };
    setComment([...comments, newComment]);
    nextId.current += 1;
    setValue('');
    e.preventDefault();
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
          className="marginLeft"
          src={heartImg.url}
          alt="좋아요"
          onClick={onHeartClick}
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
      <CommentBox onRemove={onRemove} comments={comments} />
      <div className="feedDay flex flexStart">
        <p className="marginLeft">1일전</p>
      </div>
      <form className="feedInput flex spaceBetween" onSubmit={onSubmit}>
        <img
          className="marginLeft"
          src="images/wanyoung/image/smile.png"
          alt="아이콘"
        />
        <input
          maxLength={15}
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
