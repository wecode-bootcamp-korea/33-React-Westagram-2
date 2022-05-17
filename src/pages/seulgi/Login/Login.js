import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const goToMain = () => {
    navigate('/main-seulgi');
  };

  const handleIdInput = event => {
    setId(event.target.value);
  };

  const handlePwInput = event => {
    setPw(event.target.value);
  };

  return (
    <div className="login">
      <div className="wrapper">
        <h1>westagram</h1>
        <form>
          <input
            onChange={handleIdInput}
            type="id"
            value={id}
            id="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <br />
          <input
            onChange={handlePwInput}
            type="password"
            value={pw}
            id="pw"
            placeholder="비밀번호"
          />
          <br />
          <button
            id="btn"
            onClick={goToMain}
            disabled={id.includes('@') && pw.length > 5 ? false : true}
          >
            로그인
          </button>
        </form>
        <h5 onClick={goToMain}>메인페이지로 이동하기</h5>
      </div>
    </div>
  );
};

export default Login;
