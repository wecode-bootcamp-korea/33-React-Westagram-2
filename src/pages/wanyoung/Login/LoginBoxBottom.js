import './LoginBoxBottom.scss';

const LoginBoxBottom = () => {
  return (
    <section className="loginBoxBottom flex center marginTop">
      <p className="forgotPasswd">계정이 없으신가요?</p>
      <button className="btnStyleNone loginBoxBottomText marginLeft">
        가입하기
      </button>
    </section>
  );
};

export default LoginBoxBottom;
