import React from 'react';
import { useState } from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav';

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

function FeedStory() {
  return (
    <div className="feedStory">
      <div className="storyBox">
        <button className="storyButton 1">
          <span>
            <img src="images/seulgi/storyButton1.jpg" alt="" />
          </span>
        </button>
        <div className="storyId">hi__yeon__</div>
      </div>
      <div className="storyBox 2">
        <button className="storyButton">
          <span>
            <img src="images/seulgi/storyButton2.jpg" alt="" />
          </span>
        </button>
        <div className="storyId">__plan_j</div>
      </div>
      <div className="storyBox 3">
        <button className="storyButton">
          <span>
            <img src="images/seulgi/storyButton3.jpg" alt="" />
          </span>
        </button>
        <div className="storyId">suen.park</div>
      </div>
      <div className="storyBox 4">
        <button className="storyButton">
          <span>
            <img src="images/seulgi/storyButton4.jpg" alt="" />
          </span>
        </button>
        <div className="storyId">jindo_luv</div>
      </div>
      <div className="storyBox 5">
        <button className="storyButton">
          <span>
            <img src="images/seulgi/storyButton5.jpg" alt="" />
          </span>
        </button>
        <div className="storyId">jindo_bori</div>
      </div>
      <div className="storyBox 6">
        <button className="storyButton">
          <span>
            <img src="images/seulgi/storyButton6.jpg" alt="" />
          </span>
        </button>
        <div className="storyId">poong__e</div>
      </div>
      <div className="storyBox 7">
        <button className="storyButton">
          <span>
            <img src="images/seulgi/storyButton7.jpg" alt="" />
          </span>
        </button>
        <div className="storyId">peppoya</div>
      </div>
      <div className="storyBox 8">
        <button className="storyButton">
          <span>
            <img src="images/seulgi/storyButton8.jpg" alt="" />
          </span>
        </button>
        <div className="storyId">jeongduck</div>
      </div>
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
      <div className="content 1">
        <div className="recommendContentLeft">
          <div className="recommendImgBox">
            <span className="recommendImgBoxProfile">
              <img src="images/seulgi/storyButton1.jpg" alt="" />
            </span>
          </div>
          <div className="contentProfile">
            <div className="id">lovemysanso</div>
            <div className="description">
              jindo_bory님 외 1명이 팔로우합니다
            </div>
          </div>
        </div>
        <div className="contentRight">
          <button className="contentRightBtn">팔로우</button>
        </div>
      </div>
      <div className="content 2">
        <div className="recommendContentLeft">
          <div className="recommendImgBox">
            <span className="recommendImgBoxProfile">
              <img src="images/seulgi/storyButton2.jpg" alt="" />
            </span>
          </div>
          <div className="contentProfile">
            <div className="id">na120100</div>
            <div className="description">회원님을 팔로우합니다.</div>
          </div>
        </div>
        <div className="contentRight">
          <button className="contentRightBtn">팔로우</button>
        </div>
      </div>
      <div className="content 3">
        <div className="recommendContentLeft">
          <div className="recommendImgBox">
            <span className="recommendImgBoxProfile">
              <img src="images/seulgi/storyButton3.jpg" alt="" />
            </span>
          </div>
          <div className="contentProfile">
            <div className="id">yeon_.fit</div>
            <div className="description">
              hi__yeon__님 외 2명이 팔로우합니다.
            </div>
          </div>
        </div>
        <div className="contentRight">
          <button className="contentRightBtn">팔로우</button>
        </div>
      </div>
      <div className="content 4">
        <div className="recommendContentLeft">
          <div className="recommendImgBox">
            <span className="recommendImgBoxProfile">
              <img src="images/seulgi/storyButton4.jpg" alt="" />
            </span>
          </div>
          <div className="contentProfile">
            <div className="id">tinkerbell_jw</div>
            <div className="description">hi__yeon__님이 팔로우합니다</div>
          </div>
        </div>
        <div className="contentRight">
          <button className="contentRightBtn">팔로우</button>
        </div>
      </div>
      <div className="content 5">
        <div className="recommendContentLeft">
          <div className="recommendImgBox">
            <span className="recommendImgBoxProfile">
              <img src="images/seulgi/storyButton5.jpg" alt="" />
            </span>
          </div>
          <div className="contentProfile">
            <div className="id">gorani_sd</div>
            <div className="description">wwhite_bear_님이 팔로우합니다</div>
          </div>
        </div>
        <div className="contentRight">
          <button className="contentRightBtn">팔로우</button>
        </div>
      </div>
    </div>
  );
}

function MainRightProfile() {
  return (
    <div className="mainRightProfile">
      <span>
        <img src="/images/seulgi/asideProfile.jpg" alt="" />
      </span>
      <div className="info">
        golden_galaxy_sea
        <br />
        <div className="description">금호🐱 은하🐈 동해🐶</div>
      </div>
      <button className="contentRightDescriptionBtn">전환</button>
    </div>
  );
}

function Sitemap() {
  return (
    <ol className="sitemap">
      <li>소개</li>
      <li>도움말</li>
      <li>홍보 센터</li>
      <li>API</li>
      <li>채용 정보</li>
      <li>개인정보처리방침</li>
      <li>약관</li>
      <li>위치</li>
      <li>인기 계정</li>
      <li>해시태그</li>
      <li>언어</li>
    </ol>
  );
}

export default Main;
