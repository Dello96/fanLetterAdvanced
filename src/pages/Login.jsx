import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Route, Switch, Link } from "react-router-dom";

const Container = styled.body`
  display: flex;
  width: fit-content;
  height: fit-content;
  flex-direction: column;
  margin-top: 200px;
  text-align: left;
`;

const LoginInput = styled.input`
  width: 300px;
  height: 40px;
  color: grey;
  border-width: 1px;
  margin: 15px;
`;

const WrappingBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const LoginsBtn = styled.button`
  border-radius: 20px;
  width: 70px;
  height: 30px;
  border: 0px;
  cursor: pointer;
  ${(props) => {
    if (props.isLoginPage === true) {
      return css`
        background-color: black;
        color: white;
      `;
    }
  }}
`;

const BlockedLoginsBtn = styled.button`
  border-radius: 20px;
  width: 70px;
  height: 30px;
  border: 0px;
  cursor: pointer;
  ${(props) => {
    if (props.isLoginPage === false) {
      return css`
        background-color: black;
        color: white;
        display: block;
      `;
    }
  }}
`;

function Login() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };
  console.log(isLoginPage);

  return (
    <center>
      <Container>
        {isLoginPage ? "로그인" : "회원가입"}
        {isLoginPage ? (
          <>
            <LoginInput
              onChange={(event) => {
                setId(event.target.value);
              }}
              placeholder="아이디를 입력하세요 (4~10글자)"
            />
            <LoginInput
              type="password"
              placeholder="비밀번호를 입력하세요 (4~12글자)"
            />
          </>
        ) : (
          <>
            <LoginInput placeholder="아이디를 입력하세요 (4~10글자)" />
            <LoginInput
              type="password"
              placeholder="비밀번호를 입력하세요 (4~12글자)"
            />
            <LoginInput placeholder="닉네임을 입력하세요 (3~10글자)" />
          </>
        )}
        <WrappingBtn>
          {isLoginPage ? (
            <>
              <LoginsBtn>로그인</LoginsBtn>
              <BlockedLoginsBtn onClick={togglePage}>회원가입</BlockedLoginsBtn>
            </>
          ) : (
            <BlockedLoginsBtn onClick={togglePage}>회원가입</BlockedLoginsBtn>
          )}
        </WrappingBtn>
      </Container>
    </center>
  );
}

export default Login;
