import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <header>
        <div className="nav">
          <div className="nav_wrapper">
            <div className="nav_left">
              <h1>westagram</h1>
            </div>
            <div className="nav_center">
              <div className="search">
                <input type="text" id="search" />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/709/709592.png"
                  width="24px"
                />
                <span>검색</span>
              </div>
            </div>
            <div className="nav_right">
              <div className="nav_right_icon">
                <span>
                  <img src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" />
                </span>
                <img src="https://cdn-icons.flaticon.com/png/512/2961/premium/2961957.png?token=exp=1651557080~hmac=c9568184a57d286c9bd007edd37f85c4" />
                <img src="https://cdn-icons.flaticon.com/png/512/3757/premium/3757685.png?token=exp=1651557127~hmac=49a22cc1693bdce3760728d3838acb30" />
                <img src="https://cdn-icons-png.flaticon.com/512/6537/6537820.png" />
                <img src="https://cdn-icons.flaticon.com/png/512/2550/premium/2550207.png?token=exp=1651557471~hmac=b43b4d6b088783584494199c4c5e739e" />
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main">
        <div className="feeds">
          <div className="feed_story">
            <div className="story_box">
              <button className="story_button">
                <span>
                  <img src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
                </span>
              </button>
              <div className="story_id">hi__yeon__</div>
            </div>
            <div className="story_box 2">
              <button className="story_button">
                <span>
                  <img src="https://images.unsplash.com/photo-1651763087840-ab3ccc6a45b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
                </span>
              </button>
              <div className="story_id">__plan_j</div>
            </div>
            <div className="story_box 3">
              <button className="story_button">
                <span>
                  <img src="https://images.unsplash.com/photo-1651693029270-bf3c29ad0b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
                </span>
              </button>
              <div className="story_id">suen.park</div>
            </div>
            <div className="story_box 4">
              <button className="story_button">
                <span>
                  <img src="https://images.unsplash.com/photo-1651695978616-fa82f73762a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
                </span>
              </button>
              <div className="story_id">jindo_luv</div>
            </div>
            <div className="story_box 5">
              <button className="story_button">
                <span>
                  <img src="https://images.unsplash.com/photo-1651719500430-630f9d7abd7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80" />
                </span>
              </button>
              <div className="story_id">jindo_bori</div>
            </div>
            <div className="story_box 6">
              <button className="story_button">
                <span>
                  <img src="https://images.unsplash.com/photo-1651743544974-67866012132b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
                </span>
              </button>
              <div className="story_id">poong__e</div>
            </div>
            <div className="story_box 7">
              <button className="story_button">
                <span>
                  <img src="https://images.unsplash.com/photo-1635802324804-54fb506646ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" />
                </span>
              </button>
              <div className="story_id">peppoya</div>
            </div>
            <div className="story_box 8">
              <button className="story_button">
                <span>
                  <img src="https://images.unsplash.com/photo-1651690802122-0611d2734232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
                </span>
              </button>
              <div className="story_id">jeongduck</div>
            </div>
          </div>
          <div className="article">
            <div className="article_profile">
              <div className="article_profile_header">
                <button className="article_header_button">
                  <span>
                    <img src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" />
                  </span>
                </button>
                <div className="article_header_id">golden_galaxy_sea</div>
              </div>
              <div className="article_menu">
                <img src="https://cdn-icons-png.flaticon.com/512/512/512142.png" />
              </div>
            </div>
            <div className="article_img">
              <img src="https://i.pinimg.com/originals/cc/1d/88/cc1d88972e63680ca0f92ad9f4e3427f.jpg" />
            </div>
            <div className="article_icon">
              <div className="article_left_icon">
                <button>
                  <i className="fa-regular fa-heart" />
                  like
                </button>
                <button>DM</button>
                <button>share</button>
              </div>
              <div className="article_right_icon">
                <button>
                  <i className="fa-solid fa-bookmark" />
                  bookmark
                </button>
              </div>
            </div>
            <div className="article_like">좋아요 925개</div>
            <div className="article_comment">
              <span className="commentId">whatabeautifulcat</span>
              <span className="commentDetail">
                So cute 😻 <br />
              </span>
            </div>
            <div className="article_time">1일 전</div>
            <div className="article_add_comment">
              <input
                className="commentInput"
                type="text"
                placeholder="댓글 달기..."
              />
              <button className="commentAdd">Add</button>
            </div>
          </div>
        </div>
        <div className="main_right">
          <div className="main_right_profile">
            <span>
              <img src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" />
            </span>
            <div className="info">
              golden_galaxy_sea
              <br />
              <div className="description">금호🐱 은하🐈 동해🐶</div>
            </div>
            <button className="content_right_description_btn">전환</button>
          </div>
          <div className="main_right_recommend">
            <div className="header">
              <div>회원님을 위한 추천</div>
              <button className="content_right_all_btn">모두 보기</button>
            </div>
            <div className="right_recommend_contentBox">
              <div className="content 1">
                <div className="recommend_content_left">
                  <div className="recommend_imgBox">
                    <span className="recommend_imgBox_profile">
                      <img src="https://images.unsplash.com/photo-1536544753306-ca75d2e9f7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80" />
                    </span>
                  </div>
                  <div className="content_profile">
                    <div className="id">lovemysanso</div>
                    <div className="description">
                      jindo_bory님 외 1명이 팔로우합니다
                    </div>
                  </div>
                </div>
                <div className="content_right">
                  <button className="content_right_btn">팔로우</button>
                </div>
              </div>
              <div className="content 2">
                <div className="recommend_content_left">
                  <div className="recommend_imgBox">
                    <span className="recommend_imgBox_profile">
                      <img src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80" />
                    </span>
                  </div>
                  <div className="content_profile">
                    <div className="id">na120100</div>
                    <div className="description">회원님을 팔로우합니다.</div>
                  </div>
                </div>
                <div className="content_right">
                  <button className="content_right_btn">팔로우</button>
                </div>
              </div>
              <div className="content 3">
                <div className="recommend_content_left">
                  <div className="recommend_imgBox">
                    <span className="recommend_imgBox_profile">
                      <img src="https://images.unsplash.com/photo-1535937633334-08d7431e494d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2346&q=80" />
                    </span>
                  </div>
                  <div className="content_profile">
                    <div className="id">yeon_.fit</div>
                    <div className="description">
                      hi__yeon__님 외 2명이 팔로우합니다.
                    </div>
                  </div>
                </div>
                <div className="content_right">
                  <button className="content_right_btn">팔로우</button>
                </div>
              </div>
              <div className="content 4">
                <div className="recommend_content_left">
                  <div className="recommend_imgBox">
                    <span className="recommend_imgBox_profile">
                      <img src="https://images.unsplash.com/photo-1535937703646-73cbf25b06d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80" />
                    </span>
                  </div>
                  <div className="content_profile">
                    <div className="id">tinkerbell_jw</div>
                    <div className="description">
                      hi__yeon__님이 팔로우합니다
                    </div>
                  </div>
                </div>
                <div className="content_right">
                  <button className="content_right_btn">팔로우</button>
                </div>
              </div>
              <div className="content 5">
                <div className="recommend_content_left">
                  <div className="recommend_imgBox">
                    <span className="recommend_imgBox_profile">
                      <img src="https://images.unsplash.com/photo-1590915168682-558b3968adf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
                    </span>
                  </div>
                  <div className="content_profile">
                    <div className="id">gorani_sd</div>
                    <div className="description">
                      wwhite_bear_님이 팔로우합니다
                    </div>
                  </div>
                </div>
                <div className="content_right">
                  <button className="content_right_btn">팔로우</button>
                </div>
              </div>
            </div>
            <div className="sitemap">
              <span>소개</span>
              <span>도움말</span>
              <span>홍보 센터</span>
              <span>API</span>
              <span>채용 정보</span>
              <span>개인정보처리방침</span>
              <span>약관</span>
              <span>위치</span>
              <span>인기 계정</span>
              <span>해시태그</span>
              <span>언어</span>
            </div>
            <div className="copyright">© 2022 PARK SEULGI FROM WECODE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
