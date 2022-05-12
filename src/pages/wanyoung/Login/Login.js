import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <body className="login flex center height_100vh flex_direction_column">
      <section className="login_box flex flex_direction_column">
        <form className=" login_box_form flex space_around flex_direction_column">
          <h2 className="login_box_logo">Westagram</h2>
          <div className="login_input_wrapper flex flex_direction_column space_between">
            <input
              id="user_id"
              className="login_box_input"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              id="user_passwd"
              className="login_box_input"
              type="password"
              placeholder="비밀번호"
            />
            <button className="login_box_btn">로그인</button>
          </div>
        </form>
        <div className="login_box_line flex center">
          <hr className="login_box_hr" />
          <span className="login_box_or">또는</span>
          <hr className="login_box_hr" />
        </div>
        <div className="login_box_input_bottom flex space_around flex_direction_column">
          <button className="btn_style_none bottom_btn">
            <img src="images/wanyoung/image/facebook.png" alt="facebook" />
            <span className="facebook_text">Facebook으로 로그인</span>
          </button>
          <a className="forgot_passwd" href="#s">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </section>
      <section className="login_box_bottom flex center margin_top">
        <p className="forgot_passwd">계정이 없으신가요?</p>
        <button className="btn_style_none login_box_bottom_text margin_left">
          가입하기
        </button>
      </section>
    </body>
  );
};

export default Login;
