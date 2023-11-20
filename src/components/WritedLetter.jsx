import React from "react";

function WritedLetter({ member, username, content }) {
  return (
    <div
      style={{ border: "1px solid black", background: "pink", width: "200px" }}
    >
      <div>작성자: {username}</div>
      <div>받는 멤버: {member}</div>
      <div>내용: {content}</div>
    </div>
  );
}

export default WritedLetter;