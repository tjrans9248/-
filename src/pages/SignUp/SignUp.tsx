import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';

interface UserInfo {
  email: string;
  password: string;
  name: string;
  address: string;
}

function Join() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState<UserInfo>({
    email: '',
    password: '',
    name: '',
    address: '',
  });
  const [isCheckEmail, setIsCheckEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.value]: e.target.value });
  };

  const { email, password, name, address } = inputValue;

  const isPwValid = PW_VALIDATION.test(password);

  const checkIdDuplicate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    fetch('http://192.168.228.223:3001/user/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'ACCESS_SUCCESS') {
          alert('사용 가능한 이메일입니다.');
          setIsCheckEmail(true);
        } else if (data.message === 'KEY_ALREADY_EXISTS') {
          alert('이미 사용중인 이메일입니다.');
          setIsCheckEmail(false);
        }
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isCheckEmail) {
      alert('이메일 중복을 확인해주세요.');
      return;
    }

    fetch('http://192.168.228.223:3001/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        name: name,
        password: password,
        address: address,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'SIGN_UP_SUCCESS') {
          alert('회원가입 성공!');
          navigate('/login');
        } else if (data.message === 'INVALID_PASSWORD') {
          alert(
            '영문(대소문자)과 특수문자를 포함한 8자리 이상의 비밀번호를 작성해주세요.'
          );
        } else {
          alert('회원가입 실패!');
        }
      });
  };

  return (
    <>
      <h1 className="join-title">회원가입</h1>
      <h2 className="join-subTitle">정보입력</h2>
      <div className="join-content">
        <div className="join-content-head">
          <h3 className="join-content-title">기본정보</h3>
          <p className="join-caution-text">
            <span className="caution-symbol">*</span>표시는 반드시 입력하셔야
            하는 항목입니다.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="join-form">
            <label className="form-label">
              <span className="caution-symbol">*</span>이메일
            </label>
            <input
              onChange={handleChange}
              className="form-input-email input-focus"
              name="email"
            />
            <button className="duplicate-btn" onClick={checkIdDuplicate}>
              중복확인
            </button>
          </div>
          <div className="join-form join-form-pw">
            <label className="form-label">
              <span className="caution-symbol">*</span>비밀번호
            </label>
            <div className="form-password-wrap">
              <input
                className="form-input-long input-focus"
                name="password"
                placeholder="영문 대소문자와 특수문자 포함, 8자리 이상"
              />
              {password.length > 0 && !isPwValid && (
                <span className="join-valid-text">
                  * 비밀번호 형식을 다시 확인해주세요.
                </span>
              )}
            </div>
          </div>
          <div className="join-form">
            <label className="form-label">
              <span className="caution-symbol">*</span>이름
            </label>
            <input className="form-input-long input-focus" name="name" />
          </div>
          <div className="join-form">
            <label className="form-label">
              <span className="caution-symbol">*</span>주소
            </label>
            <input className="form-input-long input-focus" name="address" />
          </div>
          <button className="join-btn">회원가입</button>
        </form>
      </div>
    </>
  );
}

export default Join;

const PW_VALIDATION = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,}/;
