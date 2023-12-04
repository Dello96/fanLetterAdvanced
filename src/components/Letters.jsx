import React from "react";
import { useSelector } from "react-redux";
import WritedLetter from "./WritedLetter";
import styled from "styled-components";

const WritedLetters = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 20px;
  margin-left: 20px;
`;

function Letters() {
  const selectedMemberName = useSelector(
    (state) => state.member.selectedMemberName
  );
  const letters = useSelector((state) => state.letter.letters);

  const lettersOnSelectedMember = letters.filter(
    (letter) => letter.member === selectedMemberName
  );

  return (
    <>
      <WritedLetters>
        {lettersOnSelectedMember.map((letter) => (
          <WritedLetter
            key={letter.id}
            member={letter.member}
            username={letter.nickname}
            content={letter.content}
          />
        ))}
      </WritedLetters>
    </>
  );
}

export default Letters;
