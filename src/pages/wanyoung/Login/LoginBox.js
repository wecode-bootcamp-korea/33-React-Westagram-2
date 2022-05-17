import LoginForm from './LoginForm';
import './LoginBox.scss';

const LoginBox = () => {
  return (
    <section className="loginBox flex flexDirectionColumn">
      <LoginForm />
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
  );
};

export default LoginBox;
