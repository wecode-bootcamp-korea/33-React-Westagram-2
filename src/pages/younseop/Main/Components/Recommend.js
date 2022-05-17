import React from 'react';
import RecommendItems from './RecommendItems';

const Recommend = () => {
  return (
    <div className="recommendedUser">
      <div className="userListHeader">
        <span className="userListTitle">회원님을 위한 추천</span>
        <button className="userListAll">모두 보기</button>
      </div>
      <RecommendItems />
    </div>
  );
};

export default Recommend;
