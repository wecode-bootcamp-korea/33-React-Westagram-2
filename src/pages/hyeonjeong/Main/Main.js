import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav';
import Comment from './Comment';
import Feed from './Feed';

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [commentList, setCommentList] = useState([]); //받아온 데이터 배열에 저장할 공간 만들어 둠
  const [feedList, setFeedList] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    //목데이터 가져오기
    fetch('http://localhost:3000/data/hyunjung.json') //'api주소',정보객체
      .then(res => res.json()) //받아온 데이터를 js형태로 바꿔줌(데이터 알아볼 수 있도록 변환)
      .then(data => {
        setCommentList(data);
        idRef.current = data.length + 1;
      });
  }, []);
  //2번째 인자 빈배열> 마운트 시(최초 화면에 렌더링시)에 useEffect실행됨

  useEffect(() => {
    fetch('http://localhost:3000/data/hyunjung2.json')
      .then(res => res.json())
      .then(feedData => {
        setFeedList(feedData);
        console.log('feedData', feedData);
      });
  }, []);

  console.log('feedList > ', feedList);

  const isValid = inputValue.length > 0;

  const handleInput = e => {
    setInputValue(e.target.value);
  };

  // const post = () => {
  //   let copy = [...commentList];
  //   copy.push(inputValue);
  //   setCommentList(copy);
  //   setInputValue('');
  // };

  const post = e => {
    e.preventDefault();
    let copy = [...commentList];
    //객체를 할당한 변수를 post함수 밖에 만들면 렌더링 될 때마다 user가 만들어지니까 안에 쓴다
    //form태그는 submit 되면 계속 새로고침 되니까 e.prevent로 막아준다.
    //그래야 댓글 쓰고 입력한 값이 commentList 어레이에 들어감
    const user = {
      id: idRef.current++,
      userName: 'catttt022',
      content: inputValue,
    };
    copy.push(user);
    setCommentList(copy);
    setInputValue('');
  };

  return (
    <div className="main">
      <Nav />
      <main className="mainPage">
        <div className="feedAndRight">
          <div className="feedBox">
            {feedList.map(item => {
              return (
                <Feed
                  isValid={isValid}
                  inputValue={inputValue}
                  handleInput={handleInput}
                  eachFeed={item}
                  comment={Comment}
                  commentList={commentList}
                  setCommentList={setCommentList}
                  post={post}
                  key={item.id}
                />
              );
            })}

            {/* <article className="feed">
              <div className="header">
                <div className="profileHeader">
                  <div className="profileImgBox">
                    <img
                      className="roundImg"
                      src="/images/hyeonjeong/IMG_20211020_110139.png"
                      alt=""
                    />
                  </div>
                  <div className="idFontSize">cat_1</div>
                </div>
                <div>
                  <i className="fa-solid fa-ellipsis" />
                </div>
              </div>

              <div>
                <img
                  className="mainImg"
                  src={'/images/hyeonjeong/' + '낙산고양이이미지.jpg'}
                  alt="mainFeedImg"
                />
              </div>

              <div className="iconBox">
                <div>
                  <i className="fa-regular fa-heart" />
                  <i className="fa-regular fa-comment" />
                  <i className="fa-regular fa-paper-plane" />
                </div>
                <div>
                  <i className="fa-regular fa-bookmark" />
                </div>
              </div>

              <div>
                <div className="likeArea margin8px">
                  <div className="likeProfileImg">
                    <img
                      className="roundImg"
                      src="/images/hyeonjeong/카페img.jpg"
                      alt="likeProfileImg"
                    />
                  </div>
                  <div>
                    <span>cafe_01</span>님<span>외 200명</span>이 좋아합니다
                  </div>
                </div>

                <div className="commentBox">
                  <div className="margin4px">
                    <span className="idFontWeight">cut_cat12</span>
                    <span>귀여운 고양이....</span>
                    <span className="grayColor">더 보기</span>
                  </div>

                  <ul className="commentUl">
                    {commentList.map(item => {
                      return (
                        <Comment
                          commentList={commentList}
                          setCommentList={setCommentList}
                          item={item}
                          key={item.id}
                        />
                      );
                    })}
                  </ul>
                  <div className="margin8px grayColor font10px">1일전</div>
                </div>

                <form className="commentInputBox">
                  <input
                    className="commentInput"
                    type="text"
                    placeholder="댓글 달기..."
                    onChange={handleInput}
                    value={inputValue}
                  />
                  <button
                    type="submit"
                    className={'inputBtn ' + (isValid ? 'activateBtn' : '')}
                    disabled={!isValid}
                    onClick={post}
                  >
                    게시
                  </button>
                </form>
              </div>
            </article> */}
          </div>

          <aside className="mainRight">
            <div className="myProfileBox">
              <img
                className="profileImg"
                src="/images/hyeonjeong/IMG_20211020_110139.png"
                alt="profile_img"
              />
              <span>lovelycat11</span>
            </div>
            <div className="recommend">
              <span>회원님을 위한 추천</span>
              <a href="/">모두보기</a>
            </div>
            <div className="recommendList">
              <div className="recommendProfile">
                <img
                  className="recommendProfileImg"
                  src="/images/hyeonjeong/카페img.jpg"
                  alt="recommendProfileImg"
                />
                <span className="recommendProfileNickname">I'm_happy</span>
                <span className="follow">팔로우</span>
              </div>
              <div className="recommendProfile">
                <img
                  className="recommendProfileImg"
                  src="/images/hyeonjeong/카페img.jpg"
                  alt="recommendProfileImg"
                />
                <span className="recommendProfileNickname">I'm_happy</span>
                <span className="follow">팔로우</span>
              </div>
              <div className="recommendProfile">
                <img
                  className="recommendProfileImg"
                  src="/images/hyeonjeong/카페img.jpg"
                  alt="recommendProfileImg"
                />
                <span className="recommendProfileNickname">I'm_happy</span>
                <span className="follow">팔로우</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Main;
