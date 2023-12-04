import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LetterForm from "../components/LetterForm";
import Letters from "../components/Letters";
import Members from "../components/Mebers";
import styled from "styled-components";
import IveMain from "../assets/IveMain.jpeg";

const MainImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 400px;
  border-radius: 20px;
`;

function Home() {
  return (
    <div>
      <div>
        <Header />
        <MainImg src={IveMain}></MainImg>
      </div>
      <body>
        <div>
          <Members />
          <LetterForm />
          <Letters />
        </div>
      </body>
    </div>
  );
}

export default Home;
