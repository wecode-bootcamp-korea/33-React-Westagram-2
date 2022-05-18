import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

  const testBackend = e => {
    e.preventDefault();
    fetch('http://10.58.3.110:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log('결과', result.token);
        if (result.token) {
          localStorage.setItem('local_token', result.token);
          goToMain();
        }
      });
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
            onClick={testBackend}
            disabled={id.includes('@') && pw.length > 5 ? false : true}
          >
            로그인
          </button>
        </form>
        <h5>
          <Link to="/main-seulgi" style={{ textDecoration: 'none' }}>
            메인페이지로 이동하기
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
