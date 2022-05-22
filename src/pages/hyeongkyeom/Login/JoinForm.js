import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinForm = () => {
  const [joinId, setJoinId] = useState('');
  const [joinPwd, setJoinPwd] = useState('');

  const handleJoinIdInput = e => {
    setJoinId(e.target.value);
  };

  const handJoinPwdInput = e => {
    setJoinPwd(e.target.value);
  };

  const navigate = useNavigate();

  const goToMain = () => {
    fetch('http://10.58.3.175:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: joinId,
        password: joinPwd,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert('회원가입에 성공했습니다!');
          navigate('/login-hyeongkyeom');
        } else {
          alert('이메일과 비밀번호를 다시 한번 확인해주세요!');
        }
      });
  };

  return (
    <form>
      <div className="joinBorder">
        <article className="mainLogo">
          <span className="logowesta">Westagram</span>
        </article>
        <article className="mainJoin">
          <input
            type="text"
            className="joinId"
            value={joinId}
            onChange={handleJoinIdInput}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            type="password"
            className="joinPwd"
            value={joinPwd}
            onChange={handJoinPwdInput}
            placeholder="비밀번호"
          />
          <button className="joinBtn" onClick={goToMain}>
            회원가입
          </button>
        </article>
      </div>
    </form>
  );
};

export default JoinForm;
