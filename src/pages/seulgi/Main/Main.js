import React from 'react';
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
        <button className="storyButton">
          <span>
            <img className="imgOne" alt="" />
          </span>
        </button>
        <div className="storyId">hi__yeon__</div>
      </div>
      <div className="storyBox 2">
        <button className="storyButton">
          <span>
            <img
              src="https://images.unsplash.com/photo-1651763087840-ab3ccc6a45b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt=""
            />
          </span>
        </button>
        <div className="storyId">__plan_j</div>
      </div>
      <div className="storyBox 3">
        <button className="storyButton">
          <span>
            <img
              src="https://images.unsplash.com/photo-1632498301446-5f78baad40d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
              alt=""
            />
          </span>
        </button>
        <div className="storyId">suen.park</div>
      </div>
      <div className="storyBox 4">
        <button className="storyButton">
          <span>
            <img
              src="https://images.unsplash.com/photo-1651695978616-fa82f73762a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt=""
            />
          </span>
        </button>
        <div className="storyId">jindo_luv</div>
      </div>
      <div className="storyBox 5">
        <button className="storyButton">
          <span>
            <img
              src="https://images.unsplash.com/photo-1651719500430-630f9d7abd7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80"
              alt=""
            />
          </span>
        </button>
        <div className="storyId">jindo_bori</div>
      </div>
      <div className="storyBox 6">
        <button className="storyButton">
          <span>
            <img
              src="https://images.unsplash.com/photo-1651743544974-67866012132b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt=""
            />
          </span>
        </button>
        <div className="storyId">poong__e</div>
      </div>
      <div className="storyBox 7">
        <button className="storyButton">
          <span>
            <img
              src="https://images.unsplash.com/photo-1635802324804-54fb506646ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              alt=""
            />
          </span>
        </button>
        <div className="storyId">peppoya</div>
      </div>
      <div className="storyBox 8">
        <button className="storyButton">
          <span>
            <img
              src="https://images.unsplash.com/photo-1651690802122-0611d2734232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt=""
            />
          </span>
        </button>
        <div className="storyId">jeongduck</div>
      </div>
    </div>
  );
}

function Article() {
  return (
    <article className="article">
      <div className="articleProfile">
        <div className="articleProfileHeader">
          <button className="articleProfileHeaderBtn">
            <span>
              <img
                src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt=""
              />
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
      <div className="articleComment">
        <span className="commentId">whatabeautifulcat</span>
        <span className="commentDetail">
          So cute 😻 <br />
        </span>
      </div>
      <div className="articleTime">1일 전</div>
      <div className="articleAddComment">
        <input
          className="commentInput"
          type="text"
          placeholder="댓글 달기..."
        />
        <button className="commentAdd">Add</button>
      </div>
    </article>
  );
}

function RecommendBox() {
  return (
    <div className="RightRecommendContentBox">
      <div className="content 1">
        <div className="recommendContentLeft">
          <div className="recommendImgBox">
            <span className="recommendImgBoxProfile">
              <img
                src="https://images.unsplash.com/photo-1536544753306-ca75d2e9f7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80"
                alt=""
              />
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
              <img
                src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80"
                alt=""
              />
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
              <img
                src="https://images.unsplash.com/photo-1535937633334-08d7431e494d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2346&q=80"
                alt=""
              />
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
              <img
                src="https://images.unsplash.com/photo-1535937703646-73cbf25b06d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80"
                alt=""
              />
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
              <img
                src="https://images.unsplash.com/photo-1590915168682-558b3968adf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt=""
              />
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
