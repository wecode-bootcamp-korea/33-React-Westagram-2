import React from 'react';
import './Main.scss';
import '../style/common.scss';

function Main() {
  return (
    <body className="mainPage positionRelative">
      <section className="navBar positionFixed flex center">
        <nav className="navBarInner flex spaceAround positionFixed">
          <h2 className="logo">Westagram</h2>
          <div className="positionRelative">
            <i className="fa-solid fa-magnifying-glass positionAbsolute glass" />
            <input
              className="navBarInput"
              type="text"
              placeholder="검색"
              maxLength="14"
            />
            <div className="searchUserResult flex flexDirectionColumn flexStart hidden" />
          </div>
          <div className="navBarItem flex spaceAround positionRelative">
            <button>
              <img src="images/wanyoung/image/home.png" alt="아이콘" />
            </button>
            <button>
              <img src="images/wanyoung/image/send.png" alt="아이콘" />
            </button>
            <button>
              <img src="images/wanyoung/image/more.png" alt="아이콘" />
            </button>
            <button>
              <img src="images/wanyoung/image/compass.png" alt="아이콘" />
            </button>
            <button>
              <img src="images/wanyoung/image/heart.png" alt="아이콘" />
            </button>
            <button>
              <img
                id="user_profile"
                className="imgCircle32px"
                src="images/wanyoung/image/person_pic5.jpg"
                alt="유저사진"
              />
            </button>
            <div
              id="hidden_nav"
              className="hiddenNavBar flex flexDirectionColumn spaceAround positionAbsolute hidden"
            >
              <div className="flex flexDirectionColumn spaceAround hiddenNavItem">
                <div className="hiddenNavImgWrapper marginLeft flex flexStart">
                  <img
                    className="hiddenNavBarImg"
                    src="images/wanyoung/image/feed_user.png"
                    alt="유저사진"
                  />
                  <p className="fontSize14px">프로필</p>
                </div>
                <div className="hiddenNavImgWrapper marginLeft flex flexStart">
                  <img
                    className="hiddenNavBarImg"
                    src="images/wanyoung/image/mark.png"
                    alt="유저사진"
                  />
                  <p className="fontSize14px">저장됨</p>
                </div>
                <div className="hiddenNavImgWrapper marginLeft flex flexStart">
                  <img
                    className="hiddenNavBarImg"
                    src="images/wanyoung/image/feed_user.png"
                    alt="유저사진"
                  />
                  <p className="fontSize14px">설정</p>
                </div>
                <div className="hiddenNavImgWrapper marginLeft flex flexStart">
                  <img
                    className="hiddenNavBarImg"
                    src="images/wanyoung/image/feed_user.png"
                    alt="유저사진"
                  />
                  <p className="fontSize14px">계정전환</p>
                </div>
              </div>
              <div className="hiddenNavImgWrapper marginLeft flex flexStart">
                <p className="fontSize14px">로그아웃</p>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section className="mainContent flex">
        <div className="leftContent flex flexDirectionColumn">
          <article className="leftContentNewStory flex spaceBetween">
            <div className="newStoryInnerBox positionRelative flex center flexDirectionColumn marginLeft">
              <img
                className="imgCircle56px"
                src="images/wanyoung/image/circle.png"
                alt="아이콘"
              />
              <img
                className="newStoryUserImg positionAbsolute imgCircle46px"
                src="images/wanyoung/image/person_pic.jpg"
                alt="유저사진"
              />
              <span>peter_2</span>
            </div>
            <div className="newStoryInnerBox positionRelative flex center flexDirectionColumn marginLeft">
              <img
                className="imgCircle56px"
                src="images/wanyoung/image/circle.png"
                alt="아이콘"
              />
              <img
                className="newStoryUserImg positionAbsolute imgCircle46px"
                src="images/wanyoung/image/pserson_pic1.jpg"
                alt="유저사진"
              />
              <span>harry_po</span>
            </div>
            <div className="newStoryInnerBox positionRelative flex center flexDirectionColumn marginLeft">
              <img
                className="imgCircle56px"
                src="images/wanyoung/image/circle.png"
                alt="아이콘"
              />
              <img
                className="newStoryUserImg positionAbsolute imgCircle46px"
                src="images/wanyoung/image/person_pic2.jpg"
                alt="유저사진"
              />
              <span>malfoy_ee</span>
            </div>
            <div className="newStoryInnerBox positionRelative flex center flexDirectionColumn marginLeft">
              <img
                className="imgCircle56px"
                src="images/wanyoung/image/circle.png"
                alt="아이콘"
              />
              <img
                className="newStoryUserImg positionAbsolute imgCircle46px"
                src="images/wanyoung/image/person_pic3.jpg"
                alt="유저사진"
              />
              <span>lee_j</span>
            </div>
            <div className="newStoryInnerBox positionRelative flex center flexDirectionColumn marginLeft">
              <img
                className="imgCircle56px"
                src="images/wanyoung/image/circle.png"
                alt="아이콘"
              />
              <img
                className="newStoryUserImg positionAbsolute imgCircle46px"
                src="images/wanyoung/image/person_pic4.jpg"
                alt="유저사진"
              />
              <span>min_jj</span>
            </div>
            <div className="newStoryInnerBox positionRelative flex center flexDirectionColumn marginLeft">
              <img
                className="imgCircle56px"
                src="images/wanyoung/image/circle.png"
                alt="아이콘"
              />
              <img
                className="newStoryUserImg positionAbsolute imgCircle46px"
                src="images/wanyoung/image/person_pic5.jpg"
                alt="유저사진"
              />
              <span>ghost_shell</span>
            </div>
            <div className="newStoryInnerBox positionRelative flex center flexDirectionColumn marginLeft">
              <img
                className="imgCircle56px"
                src="images/wanyoung/image/circle.png"
                alt="아이콘"
              />
              <img
                className="newStoryUserImg positionAbsolute imgCircle46px"
                src="images/wanyoung/image/person_pic6.jpg"
                alt="유저사진"
              />
              <span>wecode_</span>
            </div>
            <div className="newStoryInnerBox positionRelative flex center flexDirectionColumn marginLeft">
              <img
                className="imgCircle56px"
                src="images/wanyoung/image/circle.png"
                alt="아이콘"
              />
              <img
                className="newStoryUserImg positionAbsolute imgCircle46px"
                src="images/wanyoung/image/person_pic7.jpg"
                alt="유저사진"
              />
              <span>rider_kim</span>
            </div>
            <div className="newStoryInnerBox positionRelative flex center flexDirectionColumn marginLeft">
              <img
                className="imgCircle56px"
                src="images/wanyoung/image/circle.png"
                alt="아이콘"
              />
              <img
                className="newStoryUserImg positionAbsolute imgCircle46px"
                src="images/wanyoung/image/person_pic8.jpg"
                alt="유저사진"
              />
              <span>broom_stick</span>
            </div>
          </article>
          <article className="leftContentFeedBox flex flexDirectionColumn">
            <div className="feedBoxTitle flex flexStart">
              <img
                className="userTitleImg marginLeft"
                src="images/wanyoung/image/person_pic6.jpg"
                alt="유저 프로필 사진"
              />
              <p className="userText marginLeft">new_0_person</p>
            </div>
            <img
              className="feedBoxImg"
              src="images/wanyoung/image/racoon1.jpg"
              alt="피드 사진"
            />
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
                new_0_person{' '}
                <span className="marginLeft fontSize12px">라쿤 귀여워~</span>
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
              />
              <button
                id="comment-button"
                type="submit"
                className="fontSize14px"
              >
                게시
              </button>
            </form>
          </article>
          <article className="leftContentFeedBox flex flexDirectionColumn">
            <div className="feedBoxTitle flex flexStart">
              <img
                className="userTitleImg marginLeft"
                src="images/wanyoung/image/person_pic8.jpg"
                alt="유저 프로필 사진"
              />
              <p className="userText marginLeft">old_man</p>
            </div>
            <img
              className="feedBoxImg"
              src="images/wanyoung/image/racoon2.jpg"
              alt="피드 사진"
            />
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
                sara_98 외{' '}
                <span id="count" className="userText">
                  39
                </span>
                명이 좋아합니다.
              </p>
            </div>
            <div className="marginTop">
              <p className="marginLeft fontSize14px">
                old_man{' '}
                <span className="marginLeft fontSize12px">라쿤 귀여워~</span>
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
              />
              <button
                id="comment-button"
                type="submit"
                className="fontSize14px"
              >
                게시
              </button>
            </form>
          </article>
          <article className="leftContentFeedBox flex flexDirectionColumn">
            <div className="feedBoxTitle flex flexStart">
              <img
                className="userTitleImg marginLeft"
                src="images/wanyoung/image/person_pic8.jpg"
                alt="유저 프로필 사진"
              />
              <p className="userText marginLeft">old_man</p>
            </div>
            <img
              className="feedBoxImg"
              src="images/wanyoung/image/racoon2.jpg"
              alt="피드 사진"
            />
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
                sara_98 외{' '}
                <span id="count" className="userText">
                  39
                </span>
                명이 좋아합니다.
              </p>
            </div>
            <div className="marginTop">
              <p className="marginLeft fontSize14px">
                old_man{' '}
                <span className="marginLeft fontSize12px">라쿤 귀여워~</span>
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
              />
              <button
                id="comment-button"
                type="submit"
                className="fontSize14px"
              >
                게시
              </button>
            </form>
          </article>
        </div>
        <aside className="rightContent positionRelative marginLeft">
          <div className="rightContentWrapper positionFixed flex flexDirectionColumn">
            <div className="flex flexStart marginLeft20px">
              <img
                className="imgCircle56px marginLeft"
                src="images/wanyoung/image/person_pic5.jpg"
                alt="유저사진"
              />
              <div className="flex flexDirectionColumn marginLeft">
                <p className="marginLeft rightContentUserName">wan_0_kim</p>
                <p className="marginLeft fontSize12px">완영</p>
              </div>
            </div>
            <div className="rightContentUserRecommend flex spaceBetween marginTop marginLeft20px">
              <p className="fontSize14px marginLeft">회원님을 위함 추천</p>
              <p className="marginLeft20px">모두보기</p>
            </div>
            <ul className="recommendUserList">
              <li className="recommendUserListLi flex spaceBetween">
                <div className="flex">
                  <img
                    className="imgCircle32px"
                    src="images/wanyoung/image/person_pic2.jpg"
                    alt="유저사진"
                  />
                  <div className="flex flexDirectionColumn marginLeft">
                    <p className="rightContentUserName">tree_angel</p>
                    <p className="rightContentUserNameDesc">
                      leejinse0k님 외 12명이 팔로우합니다
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <p className="recommendUserListFollow">팔로우</p>
                </div>
              </li>
              <li className="recommendUserListLi flex spaceBetween">
                <div className="flex">
                  <img
                    className="imgCircle32px"
                    src="images/wanyoung/image/person_pic3.jpg"
                    alt="유저사진"
                  />
                  <div className="flex flexDirectionColumn marginLeft">
                    <p className="rightContentUserName">wecode_2</p>
                    <p className="rightContentUserNameDesc">
                      neter_ee님 외 8명이 팔로우합니다
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <p className="recommendUserListFollow">팔로우</p>
                </div>
              </li>
              <li className="recommendUserListLi flex spaceBetween">
                <div className="flex">
                  <img
                    className="imgCircle32px"
                    src="images/wanyoung/image/person_pic4.jpg"
                    alt="유저사진"
                  />
                  <div className="flex flexDirectionColumn marginLeft">
                    <p className="rightContentUserName">suban__0_0</p>
                    <p className="rightContentUserNameDesc">
                      peter_k님이 팔로우합니다
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <p className="recommendUserListFollow">팔로우</p>
                </div>
              </li>
              <li className="recommendUserListLi flex spaceBetween">
                <div className="flex">
                  <img
                    className="imgCircle32px"
                    src="images/wanyoung/image/person_pic5.jpg"
                    alt="유저사진"
                  />
                  <div className="flex flexDirectionColumn marginLeft">
                    <p className="rightContentUserName">koko_a</p>
                    <p className="right_contentUserNameDesc">
                      lee_a_jung님 외 7명이 팔로우합니다
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <p className="recommendUserListFollow">팔로우</p>
                </div>
              </li>
              <li className="recommendUserListLi flex spaceBetween">
                <div className="flex">
                  <img
                    className="imgCircle32px"
                    src="images/wanyoung/image/person_pic6.jpg"
                    alt="유저사진"
                  />
                  <div className="flex flexDirectionColumn marginLeft">
                    <p className="rightContentUserName">mina_park</p>
                    <p className="rightContentUserNameDesc">
                      jong_ho님이 팔로우합니다
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <p className="recommendUserListFollow">팔로우</p>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </body>
  );
}

export default Main;
