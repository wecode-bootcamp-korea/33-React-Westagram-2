import React from 'react';
import './Login.scss';
import Nav from '../../../Components/Nav';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleIdInput = event => {
    setId(event.target.value);
  };

  const handlePwInput = event => {
    setPw(event.target.value);
  };

  const mainPageLink = useNavigate();

  const goToMainPage = e => {
    e.preventDefault();
    mainPageLink('/main-YounSeop');
  };

  return (
    <>
      <Nav />
      <div className="login">
        <div className="wrapper">
          <h1 className="westaLogo">Westagram</h1>
          <div className="loginBox">
            <input
              type="text"
              id="id"
              placeholder="전화번호, 사용자 이름 또는 메일"
              value={id}
              onChange={handleIdInput}
            />
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              value={pw}
              onChange={handlePwInput}
            />
            <a href="/main">
              <button
                id="loginBtn"
                disabled={id.includes('@') && pw.length >= 5 ? false : true}
                onClick={goToMainPage}
              >
                로그인
              </button>
            </a>
          </div>
          <a href="/" className="forgotPw">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
