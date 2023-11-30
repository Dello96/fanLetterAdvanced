import React, { useEffect, useState } from "react";
import LetterForm from "../components/LetterForm";
import Letters from "../components/Letters";
import Members from "../components/Mebers";
import styled from "styled-components";
import IveMain from "../assets/IveMain.jpeg";

const MainImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 400px;
`;

function Home() {
  const [data, setData] = useState([]);
  const [coloredbutton, setColoredButton] = useState(true);
  const [member, setMember] = useState("안유진");

  return (
    <div>
      <div>
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
