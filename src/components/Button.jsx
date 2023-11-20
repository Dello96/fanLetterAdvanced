import React from 'react'
import styled, { css }from "styled-components";


const ButtonBox = styled.button`
  width: 50px;
  height: 25px;
  border: 1px solid blue;
  border-radius: 20px;
  background-color: ${(props) => props.backgroundColor};
`

function Button() {
  let memberName = ["안유진", "장원영", "가을", "리즈", "레이", "이서"];
  return (
    <div>
        {memberName.map((item) => {
          return <button>{item}</button>
        })}
    </div>
  )
}

export default Button