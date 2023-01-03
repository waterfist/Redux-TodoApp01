import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../modules/todos";

function Input() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();

  const handleTitleInputChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentsInputChange = (event) => {
    setContents(event.target.value);
  };

  const handleSubmitButtonClick = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    };
    // addTodo라는 action creator를 넣어준다. payload 자리에는 새로운 Todo를 넣어줌.
    dispatch(addTodo(newTodo));
  };

  return (
    <StyledInputBox>
      <form onSubmit={handleSubmitButtonClick}>
        <input onChange={handleTitleInputChange} value={title} type="text" />
        <input
          onChange={handleContentsInputChange}
          value={contents}
          type="text"
        />
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
