import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const members = [
  { name: "안유진" },
  { name: "장원영" },
  { name: "가을" },
  { name: "리즈" },
  { name: "레이" },
  { name: "이서" },
];

const Form = styled.form`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const SelectMember = styled.select`
  width: 75px;
  height: 25px;
  text-align: center;
  margin: 20px;
`;

const WritingLetter = styled.input`
  display: flex;
  width: 450px;
  height: 150px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-color: #a25772;
  border-radius: 20px;
  margin-top: 20px;
`;

const WritingNinckName = styled.input`
  display: flex;
  width: 450px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  border-color: #a25772;
  margin-top: 20px;
`;

const WrappingLetterForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubmitBtn = styled.button`
  width: 100px;
  height: 35px;
  background-color: #7c93c3;
  border: 0px;
  border-radius: 20px;
  font-size: 15px;
  margin: 10px;
  cursor: pointer;
`;

function LetterForm({ setLetters }) {
  const [nickName, setNickName] = useState("");
  const [text, setText] = useState("");
  const [selectedMember, setSelectedMember] = useState("안유진");

  const onAddLetter = (event) => {
    event.preventDefault();
    if (!nickName || !text) {
      return alert("닉네임과 내용 입력은 필수입니다!");
    }

    const newLetter = {
      id: uuid(),
      nickname: nickName,
      content: text,
      writedTo: selectedMember,
      createdAt: new Date(),
    };
  };
  return (
    <Form>
      <SelectMember onChange={(event) => setSelectedMember(event.target.value)}>
        {members.map((item) => {
          return <option>{item.name}</option>;
        })}
      </SelectMember>
      <WrappingLetterForm>
        <WritingNinckName
          onChange={(event) => setNickName(event.target.value)}
          value={nickName}
          placeholder="닉네임을 입력해주세요!"
        />
        <WritingLetter
          onChange={(event) => setText(event.target.value)}
          value={text}
          placeholder="멤버에게 한 마디!"
        />
      </WrappingLetterForm>
      <SubmitBtn onClick={onAddLetter}>보내기!</SubmitBtn>
    </Form>
  );
}

export default LetterForm;
