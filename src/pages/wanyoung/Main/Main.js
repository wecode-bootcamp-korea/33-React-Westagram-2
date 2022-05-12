import React from 'react';
import './Main.scss';
function Main() {
  return (
    <body className="main_page position_relative">
      <section className="nav_bar position_fixed flex center">
        <nav className="nav_bar_inner flex space_around position_fixed">
          <h2 className="logo">Westagram</h2>
          <div className="position_relative">
            <i className="fa-solid fa-magnifying-glass position_absolute glass" />
            <input
              className="nav_bar_input"
              type="text"
              placeholder="검색"
              maxLength="14"
            />
            <div className="search_user_result flex flex_direction_column flex_start hidden" />
          </div>
          <div className="nav_bar_item flex space_around position_relative">
            <button>
              <img src="images/wanyoung/image/home.png" alt="" />
            </button>
            <button>
              <img src="images/wanyoung/image/send.png" alt="" />
            </button>
            <button>
              <img src="images/wanyoung/image/more.png" alt="" />
            </button>
            <button>
              <img src="images/wanyoung/image/compass.png" alt="" />
            </button>
            <button>
              <img src="images/wanyoung/image/heart.png" alt="" />
            </button>
            <button>
              <img
                id="user_profile"
                className="img_circle_32px"
                src="images/wanyoung/image/person_pic5.jpg"
                alt=""
              />
            </button>
            <div
              id="hidden_nav"
              className="hidden_nav_bar flex flex_direction_column space_around position_absolute hidden"
            >
              <div className="flex flex_direction_column space_around hidden_nav_item">
                <div className="hidden_nav_img_wrapper margin_left flex flex_start">
                  <img
                    className="hidden_nav_bar_img"
                    src="images/wanyoung/image/feed_user.png"
                    alt=""
                  />
                  <p className="font_size_14px">프로필</p>
                </div>
                <div className="hidden_nav_img_wrapper margin_left flex flex_start">
                  <img
                    className="hidden_nav_bar_img"
                    src="images/wanyoung/image/mark.png"
                    alt=""
                  />
                  <p className="font_size_14px">저장됨</p>
                </div>
                <div className="hidden_nav_img_wrapper margin_left flex flex_start">
                  <img
                    className="hidden_nav_bar_img"
                    src="images/wanyoung/image/feed_user.png"
                    alt=""
                  />
                  <p className="font_size_14px">설정</p>
                </div>
                <div className="hidden_nav_img_wrapper margin_left flex flex_start">
                  <img
                    className="hidden_nav_bar_img"
                    src="images/wanyoung/image/feed_user.png"
                    alt=""
                  />
                  <p className="font_size_14px">계정전환</p>
                </div>
              </div>
              <div className="hidden_nav_img_wrapper margin_left flex flex_start">
                <p className="font_size_14px">로그아웃</p>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section className="main_content flex">
        <div className="left_content flex flex_direction_column">
          <article className="left_content_new_story flex space_between">
            <div className="new_story_inner_box position_relative flex center flex_direction_column margin_left">
              <img
                className="img_circle_56px"
                src="images/wanyoung/image/circle.png"
                alt=""
              />
              <img
                className="new_story_user_img position_absolute img_circle_46px"
                src="images/wanyoung/image/person_pic.jpg"
                alt=""
              />
              <span>peter_2</span>
            </div>
            <div className="new_story_inner_box position_relative flex center flex_direction_column margin_left">
              <img
                className="img_circle_56px"
                src="images/wanyoung/image/circle.png"
                alt=""
              />
              <img
                className="new_story_user_img position_absolute img_circle_46px"
                src="images/wanyoung/image/pserson_pic1.jpg"
                alt=""
              />
              <span>harry_po</span>
            </div>
            <div className="new_story_inner_box position_relative flex center flex_direction_column margin_left">
              <img
                className="img_circle_56px"
                src="images/wanyoung/image/circle.png"
                alt=""
              />
              <img
                className="new_story_user_img position_absolute img_circle_46px"
                src="images/wanyoung/image/person_pic2.jpg"
                alt=""
              />
              <span>malfoy_ee</span>
            </div>
            <div className="new_story_inner_box position_relative flex center flex_direction_column margin_left">
              <img
                className="img_circle_56px"
                src="images/wanyoung/image/circle.png"
                alt=""
              />
              <img
                className="new_story_user_img position_absolute img_circle_46px"
                src="images/wanyoung/image/person_pic3.jpg"
                alt=""
              />
              <span>lee_j</span>
            </div>
            <div className="new_story_inner_box position_relative flex center flex_direction_column margin_left">
              <img
                className="img_circle_56px"
                src="images/wanyoung/image/circle.png"
                alt=""
              />
              <img
                className="new_story_user_img position_absolute img_circle_46px"
                src="images/wanyoung/image/person_pic4.jpg"
                alt=""
              />
              <span>min_jj</span>
            </div>
            <div className="new_story_inner_box position_relative flex center flex_direction_column margin_left">
              <img
                className="img_circle_56px"
                src="images/wanyoung/image/circle.png"
                alt=""
              />
              <img
                className="new_story_user_img position_absolute img_circle_46px"
                src="images/wanyoung/image/person_pic5.jpg"
                alt=""
              />
              <span>ghost_shell</span>
            </div>
            <div className="new_story_inner_box position_relative flex center flex_direction_column margin_left">
              <img
                className="img_circle_56px"
                src="images/wanyoung/image/circle.png"
                alt=""
              />
              <img
                className="new_story_user_img position_absolute img_circle_46px"
                src="images/wanyoung/image/person_pic6.jpg"
                alt=""
              />
              <span>wecode_</span>
            </div>
            <div className="new_story_inner_box position_relative flex center flex_direction_column margin_left">
              <img
                className="img_circle_56px"
                src="images/wanyoung/image/circle.png"
                alt=""
              />
              <img
                className="new_story_user_img position_absolute img_circle_46px"
                src="images/wanyoung/image/person_pic7.jpg"
                alt=""
              />
              <span>rider_kim</span>
            </div>
            <div className="new_story_inner_box position_relative flex center flex_direction_column margin_left">
              <img
                className="img_circle_56px"
                src="images/wanyoung/image/circle.png"
                alt=""
              />
              <img
                className="new_story_user_img position_absolute img_circle_46px"
                src="images/wanyoung/image/person_pic8.jpg"
                alt=""
              />
              <span>broom_stick</span>
            </div>
          </article>
          <article className="left_content_feed_box flex flex_direction_column">
            <div className="feed_box_title flex flex_start">
              <img
                className="user_title_img margin_left"
                src="images/wanyoung/image/person_pic6.jpg"
                alt="유저 프로필 사진"
              />
              <p className="user_text margin_left">new_0_person</p>
            </div>
            <img
              className="feed_box_img"
              src="images/wanyoung/image/racoon1.jpg"
              alt="피드 사진"
            />
            <div className="feed_items flex flex_start center">
              <img
                id="feed_heart"
                style={{ color: 'black' }}
                className="margin_left"
                src="images/wanyoung/image/heart.png"
                alt="좋아요"
              />
              <img
                className="margin_left"
                src="images/wanyoung/image/chat.png"
                alt="댓글 말풍선"
              />
              <img
                className="margin_left"
                src="images/wanyoung/image/send.png"
                alt="다이렉트 메세지"
              />
              <div className="feed_inner_items flex margin_right">
                <img src="images/wanyoung/image/mark.png" alt="" />
              </div>
            </div>
            <div className="flex flex_start">
              <img
                className="img_circle_17px margin_left"
                src="images/wanyoung/image/person_pic4.jpg"
                alt="좋아요 누른 사람"
              />
              <img
                className="img_circle_17px"
                src="images/wanyoung/image/person_pic6.jpg"
                alt="좋아요 누른 사람"
              />
              <img
                className="img_circle_17px"
                src="images/wanyoung/image/person_pic8.jpg"
                alt="좋아요 누른 사람"
              />
              <p className="user_text margin_left">
                harry_0님 외{' '}
                <span id="count" className="user_text">
                  60
                </span>
                명이 좋아합니다.
              </p>
            </div>
            <div className="margin_top">
              <p className="margin_left font_size_14px">
                new_0_person{' '}
                <span className="margin_left font_size_12px">라쿤 귀여워~</span>
              </p>
            </div>

            <div id="comment-content" className="feed_comment" />
            <div className="feed_day flex flex_start">
              <p className="margin_left">1일전</p>
            </div>
            <form className="feed_input flex space_between">
              <img
                className="margin_left"
                src="images/wanyoung/image/smile.png"
                alt=""
              />
              <input
                id="comment-input"
                className="margin_left feed_input_input"
                type="text"
                placeholder="댓글 달기"
              />
              <button
                id="comment-button"
                type="submit"
                className="font_size_14px"
              >
                게시
              </button>
            </form>
          </article>
          <article className="left_content_feed_box flex flex_direction_column">
            <div className="feed_box_title flex flex_start">
              <img
                className="user_title_img margin_left"
                src="images/wanyoung/image/person_pic8.jpg"
                alt="유저 프로필 사진"
              />
              <p className="user_text margin_left">old_man</p>
            </div>
            <img
              className="feed_box_img"
              src="images/wanyoung/image/racoon2.jpg"
              alt="피드 사진"
            />
            <div className="feed_items flex flex_start center">
              <img
                id="feed_heart"
                style={{ color: 'black' }}
                className="margin_left"
                src="images/wanyoung/image/heart.png"
                alt="좋아요"
              />
              <img
                className="margin_left"
                src="images/wanyoung/image/chat.png"
                alt="댓글 말풍선"
              />
              <img
                className="margin_left"
                src="images/wanyoung/image/send.png"
                alt="다이렉트 메세지"
              />
              <div className="feed_inner_items flex margin_right">
                <img src="images/wanyoung/image/mark.png" alt="" />
              </div>
            </div>
            <div className="flex flex_start">
              <img
                className="img_circle_17px margin_left"
                src="images/wanyoung/image/person_pic4.jpg"
                alt="좋아요 누른 사람"
              />
              <img
                className="img_circle_17px"
                src="images/wanyoung/image/person_pic6.jpg"
                alt="좋아요 누른 사람"
              />
              <img
                className="img_circle_17px"
                src="images/wanyoung/image/person_pic8.jpg"
                alt="좋아요 누른 사람"
              />
              <p className="user_text margin_left">
                sara_98 외{' '}
                <span id="count" className="user_text">
                  39
                </span>
                명이 좋아합니다.
              </p>
            </div>
            <div className="margin_top">
              <p className="margin_left font_size_14px">
                old_man{' '}
                <span className="margin_left font_size_12px">라쿤 귀여워~</span>
              </p>
            </div>
            <div id="comment-content" className="feed_comment" />
            <div className="feed_day flex flex_start">
              <p className="margin_left">1일전</p>
            </div>
            <form className="feed_input flex space_between">
              <img
                className="margin_left"
                src="images/wanyoung/image/smile.png"
                alt=""
              />
              <input
                id="comment-input"
                className="margin_left feed_input_input"
                type="text"
                placeholder="댓글 달기"
              />
              <button
                id="comment-button"
                type="submit"
                className="font_size_14px"
              >
                게시
              </button>
            </form>
          </article>
          <article className="left_content_feed_box flex flex_direction_column">
            <div className="feed_box_title flex flex_start">
              <img
                className="user_title_img margin_left"
                src="images/wanyoung/image/person_pic7.jpg"
                alt="유저 프로필 사진"
              />
              <p className="user_text margin_left">hello_world</p>
            </div>
            <img
              className="feed_box_img"
              src="images/wanyoung/image/racoon3.jpg"
              alt="피드 사진"
            />
            <div className="feed_items flex flex_start center">
              <img
                id="feed_heart"
                style={{ color: 'black' }}
                className="margin_left"
                src="images/wanyoung/image/heart.png"
                alt="좋아요"
              />
              <img
                className="margin_left"
                src="images/wanyoung/image/chat.png"
                alt="댓글 말풍선"
              />
              <img
                className="margin_left"
                src="images/wanyoung/image/send.png"
                alt="다이렉트 메세지"
              />
              <div className="feed_inner_items flex margin_right">
                <img src="images/wanyoung/image/mark.png" alt="" />
              </div>
            </div>
            <div className="flex flex_start">
              <img
                className="img_circle_17px margin_left"
                src="images/wanyoung/image/person_pic4.jpg"
                alt="좋아요 누른 사람"
              />
              <img
                className="img_circle_17px"
                src="images/wanyoung/image/person_pic6.jpg"
                alt="좋아요 누른 사람"
              />
              <img
                className="img_circle_17px"
                src="images/wanyoung/image/person_pic8.jpg"
                alt="좋아요 누른 사람"
              />
              <p className="user_text margin_left">
                peter_lee님 외{' '}
                <span id="count" className="user_text">
                  23
                </span>
                명이 좋아합니다.
              </p>
            </div>
            <div className="margin_top">
              <p className="margin_left font_size_14px">
                hello_world{' '}
                <span className="margin_left font_size_12px">라쿤이다.</span>
              </p>
            </div>
            <div id="comment-content" className="feed_comment" />
            <div className="feed_day flex flex_start">
              <p className="margin_left">3일전</p>
            </div>
            <form className="feed_input flex space_between">
              <img
                className="margin_left"
                src="images/wanyoung/image/smile.png"
                alt=""
              />
              <input
                id="comment-input"
                className="margin_left feed_input_input"
                type="text"
                placeholder="댓글 달기"
              />
              <button
                id="comment-button"
                type="submit"
                className="font_size_14px"
              >
                게시
              </button>
            </form>
          </article>
        </div>
        <aside className="right_content position_relative margin_left">
          <div className="right_content_wrapper position_fixed flex flex_direction_column">
            <div className="flex flex_start margin_left_20px">
              <img
                className="img_circle_56px margin_left"
                src="images/wanyoung/image/person_pic5.jpg"
                alt=""
              />
              <div className="flex flex_direction_column margin_left">
                <p className="margin_left right_content_user_name">wan_0_kim</p>
                <p className="margin_left font_size_12px">완영</p>
              </div>
            </div>
            <div className="right_content_user_recommend flex space_between margin_top margin_left_20px">
              <p className="font_size_14px margin_left">회원님을 위함 추천</p>
              <p className="margin_left_20px">모두보기</p>
            </div>
            <ul className="recommend_user_list">
              <li className="recommedn_user_list_li flex space_between">
                <div className="flex">
                  <img
                    className="img_circle_32px"
                    src="images/wanyoung/image/person_pic2.jpg"
                    alt=""
                  />
                  <div className="flex flex_direction_column margin_left">
                    <p className="right_content_user_name">tree_angel</p>
                    <p className="right_content_user_name_desc">
                      leejinse0k님 외 12명이 팔로우합니다
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <p className="recommend_user_list_follow">팔로우</p>
                </div>
              </li>
              <li className="recommedn_user_list_li flex space_between">
                <div className="flex">
                  <img
                    className="img_circle_32px"
                    src="images/wanyoung/image/person_pic3.jpg"
                    alt=""
                  />
                  <div className="flex flex_direction_column margin_left">
                    <p className="right_content_user_name">wecode_2</p>
                    <p className="right_content_user_name_desc">
                      neter_ee님 외 8명이 팔로우합니다
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <p className="recommend_user_list_follow">팔로우</p>
                </div>
              </li>
              <li className="recommedn_user_list_li flex space_between">
                <div className="flex">
                  <img
                    className="img_circle_32px"
                    src="images/wanyoung/image/person_pic4.jpg"
                    alt=""
                  />
                  <div className="flex flex_direction_column margin_left">
                    <p className="right_content_user_name">suban__0_0</p>
                    <p className="right_content_user_name_desc">
                      peter_k님이 팔로우합니다
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <p className="recommend_user_list_follow">팔로우</p>
                </div>
              </li>
              <li className="recommedn_user_list_li flex space_between">
                <div className="flex">
                  <img
                    className="img_circle_32px"
                    src="images/wanyoung/image/person_pic5.jpg"
                    alt=""
                  />
                  <div className="flex flex_direction_column margin_left">
                    <p className="right_content_user_name">koko_a</p>
                    <p className="right_content_user_name_desc">
                      lee_a_jung님 외 7명이 팔로우합니다
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <p className="recommend_user_list_follow">팔로우</p>
                </div>
              </li>
              <li className="recommedn_user_list_li flex space_between">
                <div className="flex">
                  <img
                    className="img_circle_32px"
                    src="images/wanyoung/image/person_pic6.jpg"
                    alt=""
                  />
                  <div className="flex flex_direction_column margin_left">
                    <p className="right_content_user_name">mina_park</p>
                    <p className="right_content_user_name_desc">
                      jong_ho님이 팔로우합니다
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <p className="recommend_user_list_follow">팔로우</p>
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
