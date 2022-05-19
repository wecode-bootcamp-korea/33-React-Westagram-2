import React from 'react';
import Comment from './Comment';

const Feed = props => {
  console.log('props', props);
  //Main에서 자식컴포넌트로 props보내주기
  //Feed에서 받아서 배치하기
  //Feed에 Comment import 하기
  //Feed에서 Comment로 props보내기
  //Main에서 feedList map돌리기
  return (
    <>
      <article className="feed">
        <div className="header">
          <div className="profileHeader">
            <div className="profileImgBox">
              <img
                className="roundImg"
                src={'/images/hyeonjeong/' + props.eachFeed.profile}
                alt=""
              />
            </div>
            <div className="idFontSize">{props.eachFeed.userName}</div>
          </div>
          <div>
            <i className="fa-solid fa-ellipsis" />
          </div>
        </div>

        <div>
          <img
            className="mainImg"
            src={'/images/hyeonjeong/' + props.eachFeed.profile}
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
                src={props.eachFeed.likeUser}
                alt="likeProfileImg"
              />
            </div>
            <div>
              <span>{props.eachFeed.userName}</span>님<span>외 200명</span>이
              좋아합니다
            </div>
          </div>

          <div className="commentBox">
            <div className="margin4px">
              <span className="idFontWeight">{props.eachFeed.userName}</span>
              <span>{props.Content}</span>
              <span className="grayColor">더 보기</span>
            </div>

            <ul className="commentUl">
              {props.commentList.map(item => {
                return (
                  <Comment
                    // id={item.id}
                    // userName={item.userName}
                    // content={item.content}
                    commentList={props.commentList}
                    setCommentList={props.setCommentList}
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
              onChange={props.handleInput}
              value={props.inputValue}
            />
            <button
              type="submit"
              className={'inputBtn ' + (props.isValid ? 'activateBtn' : '')}
              disabled={!props.isValid}
              onClick={props.post}
            >
              게시
            </button>
          </form>
        </div>
      </article>
    </>
  );
};

export default Feed;
