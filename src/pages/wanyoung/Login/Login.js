import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import '../style/common.scss';

const Login = () => {
  const navigate = useNavigate();
  const onClickLogin = () => {
    navigate('/main-wanyoung');
  };
  return (
    <body className="login flex center height100vh flexDirectionColumn">
      <section className="loginBox flex flexDirectionColumn">
        <form className=" loginBoxForm flex spaceAround flexDirectionColumn">
          <h2 className="loginBoxLogo">Westagram</h2>
          <div className="loginInputWrapper flex flexDirectionColumn spaceBetween">
            <input
              id="user_id"
              className="loginBoxInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              id="user_passwd"
              className="loginBoxInput"
              type="password"
              placeholder="비밀번호"
            />
            <button className="loginBoxBtn" onClick={onClickLogin}>
              로그인
            </button>
          </div>
        </form>
        <div className="loginBoxLine flex center">
          <hr className="loginBoxHr" />
          <span className="loginBoxOr">또는</span>
          <hr className="loginBoxHr" />
        </div>
        <div className="loginBoxInputBottom flex spaceAround flexDirectionColumn">
          <button className="btnStyleNone bottomBtn">
            <img src="images/wanyoung/image/facebook.png" alt="facebook" />
            <span className="facebookText">Facebook으로 로그인</span>
          </button>
          <a className="forgotPasswd" href="#s">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </section>
      <section className="loginBoxBottom flex center marginTop">
        <p className="forgotPasswd">계정이 없으신가요?</p>
        <button className="btnStyleNone loginBoxBottomText marginLeft">
          가입하기
        </button>
      </section>
    </body>
  );
};

export default Login;
