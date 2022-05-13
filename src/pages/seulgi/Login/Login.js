import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-seulgi');
  };

  return (
    <div className="login">
      <div className="wrapper">
        <div>
          <h1>westagram</h1>
          <input
            type="id"
            id="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onkeyup="isEmpty()"
          />
          <br />
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            onkeyup="isEmpty()"
          />
          <br />
          <button id="btn" disabled>
            로그인
          </button>
          <h5 onClick={goToMain}>메인페이지로 이동하기</h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
