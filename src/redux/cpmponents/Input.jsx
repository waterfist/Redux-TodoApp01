import React from "react";
import styled from "styled-components";

const handleSubmitButtonClick = (event) => {
  event.preventDefault();
};
function Input() {
  return (
    <StyledInputBox>
      <form onSubmit={handleSubmitButtonClick}>
        <input type="text" />
        <input type="text" />
        <button type="submit">추가</button>
      </form>
    </StyledInputBox>
  );
}

export default Input;

const StyledInputBox = styled.div`
  background-color: #8fbeff;
  padding: 20px;
`;
