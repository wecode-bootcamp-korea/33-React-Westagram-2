import './LoginForm.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginForm = () => {
  const navigate = useNavigate();
  const onLoginClick = () => {
    navigate('/main-wanyoung');
  };
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPasswd: '',
  });
  const onInputChange = e => {
    const { value } = e.target;
    const newUserInfo = {
      ...userInfo,
      [e.target.name]: value,
    };
    setUserInfo(newUserInfo);
  };

  return (
    <form className=" loginBoxForm flex spaceAround flexDirectionColumn">
      <h2 className="loginBoxLogo">Westagram</h2>
      <div className="loginInputWrapper flex flexDirectionColumn spaceBetween">
        <input
          name="userId"
          className="loginBoxInput"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={onInputChange}
        />
        <input
          name="userPasswd"
          className="loginBoxInput"
          type="password"
          placeholder="비밀번호"
          onChange={onInputChange}
        />
        <button
          className="loginBoxBtn"
          onClick={onLoginClick}
          disabled={
            userInfo.userId.includes('@') && userInfo.userPasswd.length > 5
              ? false
              : true
          }
        >
          로그인
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
