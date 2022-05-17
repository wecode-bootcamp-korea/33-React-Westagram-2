import React from 'react';
import '../style/common.scss';
import LoginBox from './LoginBox';
import LoginBoxBottom from './LoginBoxBottom';

const Login = () => {
  return (
    <body className="flex center height100vh flexDirectionColumn">
      <LoginBox />
      <LoginBoxBottom />
    </body>
  );
};

export default Login;
