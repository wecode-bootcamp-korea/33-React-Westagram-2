import React, { useState } from 'react';
import Nav from '../../../Components/Nav';
import USER_LIST from './UserData';
import './Main.scss';

const Main = () => {
  return (
    <div className="mainPage">
      <Nav />
      <div className="main">
        <section className="feeds">
          <FeedStory />
          <Article />
        </section>
        <aside className="mainRight">
          <MainRightProfile />
          <div className="mainRightRecommend">
            <div className="header">
              <h5>회원님을 위한 추천</h5>
              <button className="contentRightAllBtn">모두 보기</button>
            </div>
            <RecommendBox />
            <Sitemap />
            <div className="copyright">© 2022 SEULGI FROM WECODE</div>
          </div>
        </aside>
      </div>
    </div>
  );
};

// FIXME: 파일당 하나의 컴포넌트
function FeedStory() {
  return (
    <div className="feedStory">
      {USER_LIST.map(user => (
        <div className="storyBox" key={user.id}>
          <button className="storyButton">
            <span>
              <img
                src={`images/seulgi/storyButton${user.id}.jpg`}
                // FIXME: alt는 일반 영문법에 맞게
                alt="userProfile"
              />
            </span>
          </button>
          <div className="storyId">{user.userId}</div>
        </div>
      ))}
    </div>
  );
}

function Article() {
  const [input, setInput] = useState('');
  const [comment, setComment] = useState([]);

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleUpload = e => {
    e.preventDefault();
    // FIXME: 선언할 때 한번에
    const newComment = [...comment];
    newComment.push(input);
    setComment(newComment);
    setInput('');
  };

  return (
    <article className="article">
      <div className="articleProfile">
        <div className="articleProfileHeader">
          <button className="articleProfileHeaderBtn">
            <span>
              {/* FIXME: alt */} 
              {/* FIXME: 절대 경로 */}
              <img src="images/seulgi/asideProfile.jpg" alt="" />
            </span>
          </button>
          <div className="articleHeaderId">golden_galaxy_sea</div>
        </div>
        <div className="articleMenu">
          <img
            src="https://cdn-icons-png.flaticon.com/512/512/512142.png"
            alt=""
          />
        </div>
      </div>
      <div className="articleImg">
        <img
          src="https://i.pinimg.com/originals/cc/1d/88/cc1d88972e63680ca0f92ad9f4e3427f.jpg"
          alt=""
        />
      </div>
      <div className="articleIcon">
        <div className="article_left_icon">
          <button>like</button>
          <button>DM</button>
          <button>share</button>
        </div>
        <div className="article_right_icon">
          <button>bookmark</button>
        </div>
      </div>
      <div className="articleLike">좋아요 925개</div>
      {/* FIXME: 매개변수 명 정확히 */}
      {comment.map((comment, id) => {
        return (
          <Comment names="whatabeautifulcat" comments={comment} key={id} />
        );
      })}
      <form method="post" className="articleComment" onSubmit={handleUpload}>
        <input
          type="text"
          className="commentInput"
          placeholder="댓글 달기..."
          value={input}
          onChange={handleInputChange}
        />
        <button
          className="articleAddComment"
          disabled={input.length > 0 ? false : true}
        >
          게시
        </button>
      </form>
    </article>
  );
}

function Comment({ names, comments }) {
  return (
    <li className="postComment">
      <ul>
        <p className="articleComment">
          <span className="commentId">{names}</span>
          <span>{comments}</span>
        </p>
      </ul>
    </li>
  );
}

function RecommendBox() {
  return (
    <div className="RightRecommendContentBox">
      {USER_LIST.map(user => (
        <div className="content" key={user.id}>
          <div className="recommendContentLeft">
            <div className="recommendImgBox">
              <span className="recommendImgBoxProfile">
                <img
                  src={`images/seulgi/storyButton${user.id}.jpg`}
                  alt="userProfile"
                />
              </span>
            </div>
            <div className="contentProfile">
              <div className="id">{user.userId}</div>
              <div className="description">
                {`${user.userId}님 외 1명이 팔로우합니다`}
              </div>
            </div>
          </div>
          <div className="contentRight">
            <button className="contentRightBtn">팔로우</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function MainRightProfile() {
  // FIXME: 상수는 컴포넌트 바깥에 선언
  const PROFILE = [
    {
      id: 1,
      userId: 'golden_galaxy_sea',
      userNickname: '금호🐱 은하🐈 동해🐶',
    },
  ];
  return (
    <div>
      {PROFILE.map(user => (
        <div className="mainRightProfile" key={user.id}>
          <span>
            <img src="/images/seulgi/asideProfile.jpg" alt="myProfile" />
          </span>
          <div className="info">
            {user.userId}
            <br />
            <div className="description">{user.userNickname}</div>
          </div>
          <button className="contentRightDescriptionBtn">전환</button>
        </div>
      ))}
    </div>
  );
}

function Sitemap() {
  const SITE_LIST = [
    { id: 1, url: '', title: '소개' },
    { id: 2, url: '', title: '도움말' },
    { id: 3, url: '', title: '홍보 센터' },
    { id: 4, url: '', title: 'API' },
    { id: 5, url: '', title: '채용 정보' },
    { id: 6, url: '', title: '개인정보처리방침' },
    { id: 7, url: '', title: '약관' },
    { id: 8, url: '', title: '위치' },
    { id: 9, url: '', title: '인기 계정' },
    { id: 10, url: '', title: '해시태그' },
    { id: 11, url: '', title: '언어' },
  ];
  return (
    <ol className="sitemap">
      {/* FIXME: 매개변수자리 구조분해 */}
      {SITE_LIST.map(title => (
        <li key={title.id}>{title.title}</li>
      ))}
    </ol>
  );
}

export default Main;
