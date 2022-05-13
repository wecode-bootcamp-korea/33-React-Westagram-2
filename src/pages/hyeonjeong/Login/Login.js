import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-hyeonjeong');
  };
  return (
    <div className="login">
      <div className="loginContainer">
        <h3 className="title">Westagram</h3>

        <section className="loginArea">
          <input
            className="inputDecoration"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="inputDecoration"
            type="password"
            placeholder="비밀번호"
          />
          {/* <Link to="/main"><button className="buttonLogin">로그인</button></Link> */}
          <button className="buttonLogin" onClick={goToMain}>
            로그인
          </button>
        </section>

        <footer className="lostPwd">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </footer>
      </div>
    </div>
  );
};

export default Login;
