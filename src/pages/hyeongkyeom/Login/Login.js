import React, { useState } from 'react';
import './Login.scss';
import '/Users/kyeom/Desktop/33-React-Westagram-2/src/styles/common.scss';
import '/Users/kyeom/Desktop/33-React-Westagram-2/src/styles/reset.scss';
import '/Users/kyeom/Desktop/33-React-Westagram-2/src/styles/variables.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const handleIdInput = e => {
    setId(e.target.value);
  };

  const handPwdInput = e => {
    setPwd(e.target.value);
  };

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-hyeongkyeom');
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
              onChange={handleIdInput}
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              type="password"
              className="mainPwd"
              value={pwd}
              onChange={handPwdInput}
              placeholder="비밀번호"
            />
            <button
              className="loginBtn"
              disabled={id.includes('@') && pwd.length > 4 ? false : true}
              onClick={goToMain}
            >
              로그인
            </button>
            <p className="or">또는</p>
            <a className="facebookLogin" href="#!">
              <i class="fa-brands fa-facebook-square" /> Facebook으로 로그인
            </a>
            <a className="forgetPwd" href="#!">
              비밀번호를 잊으셨나요?
            </a>
          </article>
        </section>
        <section className="signBorder">
          <p className="signUp">
            계정이 없으신가요?{' '}
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
