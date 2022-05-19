import React, { useState, useEffect } from 'react';
import RecommendList from './RecommendList';
import './RightFeed.scss';

const RightFeed = () => {
  const [recommendList, setRecommendList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/recommendData.json')
      .then(res => res.json())
      .then(data => {
        setRecommendList(data);
      });
  }, []);
  return (
    <div className="mainRight">
      <div className="mainProfile">
        <img
          className="mainProfileImg"
          src="images/hyeongkyeom/main/mainProfile.jpeg"
          alt="mainProImg"
        />
        <div className="mainProfileName">
          <span>
            <b>hang_ke_mi</b>
          </span>
          <p>김형겸</p>
        </div>
      </div>
      <div className="mainRecommend">
        <section className="recommendBorder">
          <div className="recommendBorderTitle">
            <span className="recommendTxt">회원님을 위한 추천</span>{' '}
            <span>
              <b>모두 보기</b>
            </span>
          </div>
        </section>
        {recommendList.map(list => {
          return (
            <RecommendList key={list.id} name={list.name} src={list.src} />
          );
        })}
      </div>
    </div>
  );
};

export default RightFeed;
