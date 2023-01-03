import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function TodoList({ isActive }) {
  // store에 있는 todos를 가지고 온 것.
  // state는 상태를 모아 놓은 것. state 안에 있는 todos를 가지고 온다.
  const todos = useSelector((state) => state.todos);
  return (
    <StyledListBox>
      <h4>{isActive ? "해야할 일" : "완료된 일"}</h4>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <StyledTodoBox>
              <h4>{item.title}</h4>
              <p>{item.contents}</p>
              <button>완료</button>
              <button>삭제</button>
            </StyledTodoBox>
          );
        })}
    </StyledListBox>
  );
}

export default TodoList;

const StyledListBox = styled.div`
  background-color: #a9ccfc;
  padding: 20px;
`;

const StyledTodoBox = styled.div`
  background-color: #88a6d1;
  padding: 20px;
`;
