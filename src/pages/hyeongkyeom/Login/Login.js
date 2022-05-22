import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [input, setInput] = useState({
    id: '',
    pwd: '',
  });

  const { id, pwd } = input;

  const validation = id.includes('@') && pwd.length > 4;

  const handleInput = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const goToMain = () => {
    fetch('http://10.58.3.175:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pwd,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          alert('이메일과 비밀번호를 다시 한번 확인해주세요!');
        }
      })
      .then(result => {
        localStorage.setItem('token', result.access_token);
        alert('로그인에 성공했습니다!');
        navigate('/main-hyeongkyeom');
      });
  };

  return (
    <div className="login">
      <div className="westaIntro">
        <section className="mainBorder">
          <article className="mainLogo">
            <span className="logowesta">Westagram</span>
          </article>
          <article className="mainLogin">
            <input
              type="text"
              className="mainId"
              value={id}
              name="id"
              onChange={handleInput}
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              type="password"
              className="mainPwd"
              value={pwd}
              name="pwd"
              onChange={handleInput}
              placeholder="비밀번호"
            />
            <button
              className="loginBtn"
              disabled={!validation}
              onClick={goToMain}
            >
              로그인
            </button>
            <p className="or">또는</p>
            <a className="facebookLogin" href="#!">
              <i className="fa-brands fa-facebook-square" /> Facebook으로 로그인
            </a>
            <a className="forgetPwd" href="#!">
              비밀번호를 잊으셨나요?
            </a>
          </article>
        </section>
        <section className="signBorder">
          <p className="signUp">
            계정이 없으신가요?
            <a className="signUplink" href="#!">
              가입하기
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Login;
