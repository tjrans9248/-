import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type UserInfo = {
  email: string;
  password: string;
};

type Error = {
  data: any;
  WRONG_EMAIL: any;
  WRONG_PASSWORD: any;
};

const ERROR_MSG: Error = {
  WRONG_EMAIL: '이메일을 다시 작성해주세요.',
  WRONG_PASSWORD: '비밀번호를 다시 작성해주세요.',
  data: undefined,
};

function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<UserInfo>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const { email, password } = inputValue;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    fetch('http://10.58.2.130:3001/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'EXCESS_SUCCESS') {
          localStorage.setItem('accessToken', data.accessToken);
          alert('로그인 성공!');
          navigate('/');
          return;
        }

        if (ERROR_MSG.data.message) {
          alert(ERROR_MSG.data.message);
        }

        alert('로그인 실패!');
      });
  };

  return (
    <LoginContainer>
      <h1 className="login-title">로그인</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="login-input"
          name="email"
          placeholder="이메일"
        />
        <input
          onChange={handleChange}
          className="login-input"
          name="password"
          placeholder="비밀번호"
        />
        <input
          type="checkbox"
          id="saveEmail"
          className="login-checkbox-input"
        />
        <label htmlFor="saveEmail" className="login-checkbox-label">
          <span>아이디 저장</span>
        </label>
        <button className="login-btn">로그인</button>
      </form>
      <div className="login-link-cont">
        회원이 아니신가요?
        <span className="login-link-join" onClick={() => navigate('/SignUp')}>
          &nbsp; 회원가입
        </span>
      </div>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login-title {
    margin: 130px 0 50px;
    font-size: 32px;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login-input {
    margin: 7px 0;
    padding: 15px;
    width: 310px;
    font-size: 15px;
  }

  .login-input:focus {
    outline: none;
  }

  input[id='saveEmail'] {
    display: none;
  }

  input[id='saveEmail'] + label {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #bcbcbc;
    border-radius: 3px;
  }

  input[id='saveEmail'] + label {
    cursor: pointer;
  }

  .login-checkbox-label {
    position: relative;
    top: 6px;
    left: -144px;

    span {
      position: absolute;
      width: 80px;
      top: 0;
      left: 30px;
    }
  }

  .login-btn {
    margin: 30px 0 0 0;
    padding: 20px 0;
    width: 310px;
    border: 1px solid #b6b6b6;
    background-color: #222;
    font-size: 16px;
    color: white;
    box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 0.4);
    cursor: pointer;

    &:hover {
      border: 1px solid #222;
      background-color: rgb(252, 252, 252);
      font-weight: bold;
      color: #222;
    }
  }

  .login-link-cont {
    display: inline-block;
    padding-top: 50px;
    font-size: 18px;
    .login-link-join {
      margin: 50px 0;
      padding: 3px 0;
      width: 62px;
      font-size: 15px;
      font-weight: bold;
      font-size: 18px;

      cursor: pointer;

      &:hover {
        border-bottom: 1px solid #1ca14c;
        color: #1ca14c;
      }
    }
  }
`;
