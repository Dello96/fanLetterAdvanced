import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { memberActionCreators } from "../redux/memberslice";
import styled, { css } from "styled-components";

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
  const dispatch = useDispatch();
  const [activeMember, setActiveMember] = useState("안유진");

  const handleClickMember = (memberName) => {
    const createSelectMemberAction =
      memberActionCreators.createSelectMemberAction;

    const selectMemberAction = createSelectMemberAction({
      memberName: memberName,
    });
    dispatch(selectMemberAction);
    setActiveMember(memberName);
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
            $activeMember={activeMember}
            onClick={() => handleClickMember(member.name)}
          >
            {member.name}
          </ButtonBox>
        </li>
      ))}
    </ul>
  );
}

export default Members;
