import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [idInput, setIdInput] = useState('');
  const [pwdInput, setPwdInput] = useState('');

  const goToMain = e => {
    e.preventDefault();
    console.log(11);
    fetch('http://10.58.4.207:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: idInput,
        password: pwdInput,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.access_token) {
          localStorage.setItem('login-token', response.access_token);
        }
      });
    navigate('/main-hyeonjeong');
  };

  let token = localStorage.getItem('login-token');
  console.log('token', token);

  const handleIdInput = e => {
    setIdInput(e.target.value);
  };

  const handlePwdInput = e => {
    setPwdInput(e.target.value);
  };

  const isValid = idInput.includes('@') && pwdInput.length >= 5;

  return (
    <div className="login">
      <div className="loginContainer">
        <h3 className="title">Westagram</h3>

        <form className="loginArea">
          <input
            className="inputDecoration"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={idInput}
            onChange={handleIdInput}
          />
          <input
            className="inputDecoration"
            type="password"
            placeholder="비밀번호"
            value={pwdInput}
            onChange={handlePwdInput}
          />
          {/* <Link to="/main"><button className="buttonLogin">로그인</button></Link> */}
          <button
            className={'buttonLogin ' + (isValid ? 'btnActive' : '')}
            disabled={!isValid}
            onClick={goToMain}
          >
            로그인
          </button>
        </form>

        <footer className="lostPwd">
          <a href="/">비밀번호를 잊으셨나요?</a>
        </footer>
      </div>
    </div>
  );
};

export default Login;
