import { useState, useRef, useEffect } from 'react';
import './MainFeedBox.scss';
import CommentBox from './CommentBox';

const MainFeedBox = ({ feedUsers }) => {
  //FIXME: 문맥별 공백
  const { name, text, imgUrl, profileUrl } = feedUsers;
  const [value, setValue] = useState('');
  const [comments, setComment] = useState([]);
  const [likePerson, setLikePerson] = useState([]);
  useEffect(() => {
    fetch('/data/wanyoung/likePersonData.json')
      .then(res => res.json())
      .then(data => {
        setLikePerson(data);
      });
  }, []);
  useEffect(() => {
    fetch('http://localhost:3000/data/wanyoung/commentData.json')
      .then(res => res.json())
      .then(data => {
        setComment(data);
      });
  }, []);
  // FIXME: state -> UI 1대1 대응 안해도 됨
  const [heartImg, setHeartImg] = useState({
    checked: false,
    url: 'images/wanyoung/image/heart.png',
  });
  // FIXME: 항상 0
  const nextId = useRef(comments.length + 1);
  const onHeartClick = () => {
    setHeartImg({
      checked: !heartImg.checked,
      url: heartImg.checked
        ? 'images/wanyoung/image/heart_red.png'
        : 'images/wanyoung/image/heart.png',
    });
  };

  const handleCommentRemove = id => {
    setComment(comments.filter(comment => comment.id !== id));
  };

  const handleInputChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  const handleCommentSubmit = e => {
    const newComment = {
      id: nextId.current,
      name: 'wan_0_kim',
      text: value,
    };
    setComment([...comments, newComment]);
    nextId.current += 1;
    setValue('');
    // FIXME: 흐름
    e.preventDefault();
  };

  return (
    <article className="leftContentFeedBox flex flexDirectionColumn">
      <div className="feedBoxTitle flex flexStart">
        <img
          className="userTitleImg marginLeft"
          src={profileUrl}
          alt="유저 프로필 사진"
        />
        <p className="userText marginLeft">{name}</p>
      </div>
      {/* FIXME: alt에 사진, image, img 등의 내용은 필요 없음 */} 
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
        {likePerson.map(person => (
          // FIMXE: 매개변수자리 구조분해
          <img
            key={person.id}
            className={person.className}
            src={person.src}
            alt={person.alt}
          />
        ))}
        <p className="userText marginLeft">
          harry_0님 외{' '}
          <span id="count" className="userText">
            {heartImg.url === 'images/wanyoung/image/heart.png' ? 60 : 61}
          </span>
          명이 좋아합니다.
        </p>
      </div>
      <div className="marginTop">
        <p className="marginLeft fontSize14px">
          new_0_person <span className="marginLeft fontSize12px">{text}</span>
        </p>
      </div>
      <CommentBox onRemove={handleCommentRemove} comments={comments} />
      <div className="feedDay flex flexStart">
        <p className="marginLeft">1일전</p>
      </div>
      <form
        className="feedInput flex spaceBetween"
        onSubmit={handleCommentSubmit}
      >
        <img
          className="marginLeft"
          src="images/wanyoung/image/smile.png"
          alt="아이콘"
        />
        <input
          maxLength={15}
          // FIXME: no id attribute
          id="comment-input"
          className="marginLeft feedInputInput"
          type="text"
          placeholder="댓글 달기"
          value={value}
          onChange={handleInputChange}
        />
        <button id="comment-button" type="submit" className="fontSize14px">
          게시
        </button>
      </form>
    </article>
  );
};

export default MainFeedBox;
