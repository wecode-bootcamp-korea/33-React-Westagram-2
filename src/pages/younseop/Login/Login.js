import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Nav from '../../../Components/Nav';
import './Login.scss';

function Login() {
  const [input, setInput] = useState({
    id: '',
    pwd: '',
  });

  const { id, pwd } = input;

  const handleInput = e => {
    const { name, value } = e.target;
    // FIXME: setState argument -> callback function
    setInput(input => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  const mainPageLink = useNavigate();

  const goToMainPage = () => {
    mainPageLink('/main-YounSeop');
  };

  const checkLoginApi = () => {
    fetch('http://10.58.3.156:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        user_email: input.id,
        password: input.pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.Token) {
          localStorage.setItem('Token', result.Token);
          goToMainPage();
        }
      });
    // FIXME: status code
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
              placeholder="전화번호, 사용자 이름 또는 메일"
              name="id"
              value={input.id}
              onChange={handleInput}
            />
            <input
              type="password"
              placeholder="비밀번호"
              name="pwd"
              onChange={handleInput}
            />
            <button
              id="loginBtn"
              disabled={!id.includes('@') && pwd.length}
              onClick={checkLoginApi}
            >
              로그인
            </button>
          </div>
          <Link to="/" className="forgotPw">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
