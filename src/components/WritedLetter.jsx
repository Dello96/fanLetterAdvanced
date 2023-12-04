import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getFormattedDate } from "../util/data";

const CardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 350px;
  margin: 20px;
  align-items: center;
  background-color: #7c93c3;
  border-radius: 20px;
  cursor: pointer;
`;
const CardNickName = styled.div`
  width: 230px;
  height: 50px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #eef5ff;
`;
const CardMember = styled.div`
  width: 230px;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: #eef5ff;
`;

const CardContent = styled.div`
  width: 230px;
  height: 190px;
  border-radius: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  background-color: beige;
`;

const NickAndDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DateSpace = styled.time`
  justify-content: center;
  display: flex;
  width: 230px;
  height: 20px;
  background-color: transparent;
  align-items: center;
  margin: 10px 0px 10px 0px;
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
        <NickAndDate>
          <CardNickName>{letter.nickname}</CardNickName>
          <DateSpace>{getFormattedDate(letter.createdAt)}</DateSpace>
        </NickAndDate>
        <CardMember>받는 멤버: {letter.member}</CardMember>
        <CardContent>내용: {letter.content}</CardContent>
      </CardsStyle>
    </>
  );
}

export default WritedLetter;
