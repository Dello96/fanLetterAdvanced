import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import LetterForm from "../components/LetterForm";
import Letters from "../components/Letters";
import Members from "../components/Mebers";
import IveMain from "../assets/IveMain.jpeg"



function Home() {
  const [data, setData] = useState([]);
  const [coloredbutton, setColoredButton] = useState(true);
  const [member, setMember] = useState("안유진");

  return (
    <div>
      <div
        style={{
          backgroundColor: "green",
          width: "100%",
          height: "300px",
        }}
      >
        Dive Into Ive!
        <img src={IveMain}/>
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
