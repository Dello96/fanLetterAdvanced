import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { setMember } from "../redux/modules/member";

const members = [
  { name: "안유진" },
  { name: "장원영" },
  { name: "가을" },
  { name: "리즈" },
  { name: "레이" },
  { name: "이서" },
];

const ButtonBox = styled.button`
  width: 100px;
  height: 50px;
  border: 1px grey;
  border-radius: 20px;
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
  ${(props) => {
    if (props.$activeMember === props.children) {
      return css`
        background-color: black;
        color: white;
      `;
    }
    return css`
      background-color: transparent;
      color: black;
    `;
  }}
`;

function Members() {
  const selectedMember = useSelector((state) => state.member);

  const dispatch = useDispatch();

  const handleSelectedMember = (event) => {
    if (event.target === event.currentTarget) {
      return;
    }
    dispatch(setMember(event.target.textContent));
  };

  return (
    <ul
      style={{
        padding: 0,
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: "0.5rem",
      }}
    >
      {members.map((member) => (
        <li>
          <ButtonBox
            $selectedMember={selectedMember}
            onClick={() => handleSelectedMember(member.name)}
          >
            {member.name}
          </ButtonBox>
        </li>
      ))}
    </ul>
  );
}

export default Members;
