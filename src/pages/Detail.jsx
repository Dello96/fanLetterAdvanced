import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { getFormattedDate } from "../util/data";
import { useSelector, useDispatch } from "react-redux";
import { deleteLetter, editLetter } from "../redux/modules/letters";

const Container = styled.div`
  display: flex;
  height: fit-content;
  border: 1px;
  border-color: black;
  border-radius: 20px;
  background-color: black;
  margin-top: 10%;
  justify-content: center;
`;
const WrappingDetail = styled.div`
  display: flex;
  flex-direction: row;
  background-color: blue;

  width: 60%;
`;

const MemberImg = styled.img`
  display: flex;
  width: 150px;
  height: 180px;
  background-color: green;
  margin: 20px;
`;

const DetailInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: chocolate;
`;

const WrapContent = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapMemberAndBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DetailMember = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  background-color: aqua;
  margin: 10px 0px 0px 23px;
  padding: 10px;
`;

const DetailDate = styled.div`
  justify-content: center;
  display: flex;
  width: 200px;
  height: 15px;
  background-color: palegreen;
  margin: 10px 0px 0px 23px;
  padding: 10px;
  align-items: center;
`;

const DetailContent = styled.div`
  display: flex;
  width: 90%;
  height: 200px;
  background-color: ivory;
  margin: 10px 0px 10px 0px;
  padding: 10px;
`;

const ModifyContent = styled.textarea`
  display: flex;
  width: 90%;
  height: 200px;
  background-color: ivory;
  margin: 10px 0px 10px 0px;
  padding: 10px;
  resize: none;
`;

const RDBtns = styled.div`
  display: flex;
  flex-direction: row;
`;
const RDBtn = styled.button`
  width: 75px;
  height: 30px;
  border-radius: 20px;
  border: 0px;
  background-color: #6d5d6e;
  color: white;
  margin: 10px;
  cursor: pointer;
`;

function Detail({ letters, setLetters }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState("");
  const { member, nickname, content, createdAt } = letters.find(
    (letter) => letter.id === id
  );
  const onDeleteBtn = () => {
    const answer = window.confirm("정말로 삭제하시겠습니까?");
    if (!answer) return;
    dispatch(deleteLetter(id));
    // const newLetters = letters.filter((letter) => letter.id != id);
    // setLetters(newLetters);
    navigate("/");
  };

  const onEditDone = () => {
    if (!editingText) {
      return alert("수정사항이 없습니다!");
    }
    dispatch(editLetter({ id, editingText }));
    // const newLetters = letters.map((letter) => {
    //   if (letter.id === id) {
    //     return { ...letter, content: editingText };
    //   }
    //   return letter;
    // });
    // setLetters(newLetters);
    setIsEditing(false);
    setEditingText("");
  };
  return (
    <div>
      <Header />
      <Container>
        <WrappingDetail>
          <MemberImg></MemberImg>
          <DetailInfos>
            <WrapMemberAndBtn>
              <DetailMember>{member}</DetailMember>
              <RDBtns>
                {isEditing ? (
                  <>
                    <RDBtn
                      onClick={() => {
                        setIsEditing(false);
                      }}
                    >
                      취소
                    </RDBtn>
                    <RDBtn onClick={onEditDone}>수정완료</RDBtn>
                  </>
                ) : (
                  <>
                    <RDBtn
                      onClick={() => {
                        setIsEditing(true);
                      }}
                    >
                      수정
                    </RDBtn>
                    <RDBtn>삭제</RDBtn>
                  </>
                )}
              </RDBtns>
            </WrapMemberAndBtn>
            <DetailDate>{getFormattedDate(createdAt)}</DetailDate>
            <WrapContent>
              {isEditing ? (
                <ModifyContent
                  autoFocus
                  defaultValue={content}
                  onChange={(event) => {
                    setEditingText(event.target.value);
                  }}
                ></ModifyContent>
              ) : (
                <DetailContent>{content}</DetailContent>
              )}
            </WrapContent>
          </DetailInfos>
        </WrappingDetail>
      </Container>
    </div>
  );
}

export default Detail;
