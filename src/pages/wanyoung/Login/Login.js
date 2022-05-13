import React from 'react';
import '../style/common.scss';
import LoginBox from '../components/LoginBox';
import LoginBoxBottom from '../components/LoginBoxBottom';

const Login = () => {
  return (
    <body className="flex center height100vh flexDirectionColumn">
      <LoginBox />
      <LoginBoxBottom />
    </body>
  );
};

export default Login;
