import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { removeTodo } from "../modules/todos";

function TodoList({ isActive }) {
  // store에 있는 todos를 가지고 온 것.
  // state는 상태를 모아 놓은 것. state 안에 있는 todos를 가지고 온다.
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleDeleteButtonClick = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <StyledListBox>
      <h4>{isActive ? "해야할 일" : "완료된 일"}</h4>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <StyledTodoBox key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.contents}</p>
              <button>완료</button>
              <button onClick={() => handleDeleteButtonClick(item.id)}>
                삭제
              </button>
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
