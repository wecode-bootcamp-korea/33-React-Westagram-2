import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  // const navigate = useNavigate();

  // const goToMain = () => {
  //   navigate('/main');
  // };

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
          <h5>비밀번호를 잊으셨나요?</h5>
        </div>
        {/* <button onClick={goToMain}>메인 페이지로 이동</button> */}
      </div>
    </div>
  );
};

export default Login;
