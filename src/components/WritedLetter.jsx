import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 350px;
  margin: 20px;
  align-items: center;
  background-color: green;
  cursor: pointer;
`;
const CardNickName = styled.div`
  width: 230px;
  height: 50px;
  display: flex;
  margin: 20px;
  align-items: center;
  justify-content: center;
  background-color: aqua;
`;
const CardMember = styled.div`
  width: 230px;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: darkblue;
`;

const CardContent = styled.div`
  width: 230px;
  height: 190px;
  margin: 10px;
  display: flex;
  align-items: center;
  background-color: beige;
`;

function WritedLetter({ letter }) {
  const navigate = useNavigate();
  return (
    <>
      <CardsStyle
        onClick={() => {
          navigate(`/detail/${letter.id}`);
        }}
      >
        <CardNickName>{letter.nickname}</CardNickName>
        <CardMember>받는 멤버: {letter.member}</CardMember>
        <CardContent>내용: {letter.content}</CardContent>
      </CardsStyle>
    </>
  );
}

export default WritedLetter;
