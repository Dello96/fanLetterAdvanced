import React from "react";
import { useSelector } from "react-redux";
import WritedLetter from "./WritedLetter";

function Letters() {
  const selectedMemberName = useSelector(
    (state) => state.member.selectedMemberName
  );
  const letters = useSelector((state) => state.letter.letters);

  const lettersOnSelectedMember = letters.filter(
    (letter) => letter.member === selectedMemberName
  );

  return (
    <div
      style={{
        marginTop: "1rem",
        background: "yellow",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        rowGap: "1rem",
      }}
    >
      {lettersOnSelectedMember.map((letter) => (
        <WritedLetter
          key={letter.id}
          member={letter.member}
          username={letter.username}
          content={letter.content}
        />
      ))}
    </div>
  );
}

export default Letters;