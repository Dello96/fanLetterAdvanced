import React from "react";
import IveLogo from "../assets/IveLogo.jpeg";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";

const WrappingHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IconControll = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 40px;
`;

const HeadIcon = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 40px;
  display: flex;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  margin: 20px;
`;

const HeaderLoginBtn = styled.button`
  width: 80px;
  height: 40px;
  border: 0px;
  border-radius: 20px;
  margin: 20px;
  cursor: pointer;
`;

function Header() {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  const refreshHome = () => {
    window.location.reload();
  };

  return (
    <div>
      <WrappingHeader>
        <HeadIcon onClick={refreshHome}>
          <IconControll src={IveLogo}></IconControll>
        </HeadIcon>
        <HeaderLoginBtn onClick={navigateLogin}>로그인</HeaderLoginBtn>
      </WrappingHeader>
    </div>
  );
}

export default Header;
