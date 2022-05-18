import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ id: '', password: '' });

  const goToMain = () => {
    navigate('/main-seulgi');
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const testBackend = e => {
    e.preventDefault();
    fetch('http://10.58.3.110:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: input.id,
        password: input.password,
      }),
    })
      .then(response => response.json())
      .then(result => {
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
            onChange={handleInput}
            name={input.id}
            type="id"
            id="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <br />
          <input
            onChange={handleInput}
            type="password"
            name={input.password}
            id="password"
            placeholder="비밀번호"
          />
          <br />
          <button
            id="btn"
            onClick={testBackend}
            disabled={
              input.id.includes('@') && input.password.length > 5 ? false : true
            }
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
