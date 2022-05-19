import React from 'react';
import '../style/common.scss';
import LoginBox from './LoginBox';
import LoginBoxBottom from './LoginBoxBottom';

const Login = () => {
  return (
    // FIXME: no body
    // FIXME: variables 활용
    // FIXME: nesting
    <body className="flex center height100vh flexDirectionColumn">
      <LoginBox />
      <LoginBoxBottom />
    </body>
  );
};

export default Login;
