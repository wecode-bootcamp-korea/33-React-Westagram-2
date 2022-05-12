import React from 'react';
import './Login.scss';
import Nav from '../../../Components/Nav';

function Login() {
  return (
    <>
      <Nav />
      <div className="login">
        <div className="wrapper">
          <h1 className="westa-logo">Westagram</h1>
          <div className="login-box">
            <input
              type="text"
              id="id"
              placeholder="전화번호, 사용자 이름 또는 메일"
            />
            <input type="password" id="password" placeholder="비밀번호" />
            <a href="/main">
              <button id="login-btn" disabled>
                로그인
              </button>
            </a>
          </div>
          <a href="/" className="forgot-pw">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
