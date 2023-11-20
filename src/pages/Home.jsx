import React, { useEffect, useState } from "react";
import Button from "../components/Button";



function Home() {
  const [data, setData] = useState([]);
  const [coloredbutton, setColoredButton] = useState(true);
  const [member, setMember] = useState("안유진");

  return (
    <div>
      <nav
        style={{
          backgroundColor: "green",
          width: "100%",
          height: "300px",
        }}
      >
        Dive Into Ive!
      </nav>
      <body>
        <div>
          <Button />
        </div>
      </body>
    </div>
  );
}

export default Home;
