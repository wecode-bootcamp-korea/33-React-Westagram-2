import './LoginForm.scss';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const onClickLogin = () => {
    navigate('/main-wanyoung');
  };
  return (
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
  );
};

export default LoginForm;
