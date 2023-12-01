import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: fit-content;
  border: 1px;
  border-color: black;
  border-radius: 20px;
  background-color: black;
  margin-top: 10%;
  justify-content: center;
`;
const WrappingDetail = styled.div`
  display: flex;
  flex-direction: row;
  background-color: blue;

  width: 60%;
`;

const MemberImg = styled.img`
  display: flex;
  width: 150px;
  height: 180px;
  background-color: green;
  margin: 20px;
`;

const DetailInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: chocolate;
`;

const WrapContent = styled.div`
  display: flex;
  justify-content: center;
`;

const DetailMember = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  background-color: aqua;
  margin: 10px 0px 0px 23px;
`;

const DetailDate = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  background-color: palegreen;
  margin: 10px 0px 0px 23px;
`;

const DetailContent = styled.div`
  display: flex;
  width: 90%;
  height: 200px;
  background-color: ivory;
  margin: 10px 0px 10px 0px;
`;

function Detail() {
  return (
    <div>
      <Header />
      <Container>
        <WrappingDetail>
          <MemberImg></MemberImg>
          <DetailInfos>
            <DetailMember></DetailMember>
            <DetailDate></DetailDate>
            <WrapContent>
              <DetailContent></DetailContent>
            </WrapContent>
          </DetailInfos>
        </WrappingDetail>
      </Container>
    </div>
  );
}

export default Detail;
