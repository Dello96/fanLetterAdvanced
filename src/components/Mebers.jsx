import React from "react";
import { useDispatch } from "react-redux";
import { memberActionCreators } from "../redux/memberslice";

const members = [
  { name: "안유진" },
  { name: "장원영" },
  { name: "가을" },
  { name: "리즈" },
  { name: "레이" },
  { name: "이서" },
];

function Members() {
  const dispatch = useDispatch();

  const handleClickMember = (memberName) => {

    const createSelectMemberAction =
      memberActionCreators.createSelectMemberAction;

    const selectMemberAction = createSelectMemberAction({
      memberName: memberName,
    });

    dispatch(selectMemberAction);
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
        background: "magenta",
      }}
    >
      {members.map((member) => (
        <li>
          <button onClick={() => handleClickMember(member.name)}>
            {member.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Members;