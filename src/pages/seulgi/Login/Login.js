import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  function goToMain() {
    navigate('/main-seulgi');
  }

  const handleIdInput = event => {
    setId(event.target.value);
    // const id = event.target.value;
    // if (id.includes('@')) {
    //   setId(true);
    // } else setId(false);
  };

  const handlePwInput = event => {
    setPw(event.target.value);
    // const pw = event.target.value;
    // if (pw.length > 5) {
    //   setPw(true);
    // } else setPw(false);
  };

  console.log('id:', id);
  console.log(pw);

  return (
    <div className="login">
      <div className="wrapper">
        <div>
          <h1>westagram</h1>
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
            id="password"
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
          <h5 onClick={goToMain}>메인페이지로 이동하기</h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
