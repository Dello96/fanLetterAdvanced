import React from "react";

function LetterForm() {
  return (
    <div
      style={{
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "limegreen",
      }}
    >
      <textarea rows={6} placeholder="팬레터 써주세요" />
      <button style={{ marginTop: "1rem" }}>팬레터 보내기</button>
    </div>
  );
}

export default LetterForm;