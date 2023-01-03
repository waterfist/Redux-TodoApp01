import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { removeTodo, switchTodo } from "../modules/todos";

function TodoList({ isActive }) {
  // store에 있는 todos를 가지고 온 것.
  // state는 상태를 모아 놓은 것. state 안에 있는 todos를 가지고 온다.
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  // 삭제하는 것. id를 줘서 그에 맞는 것만 삭제.
  const handleDeleteButtonClick = (id) => {
    dispatch(removeTodo(id));
  };
  // 완료 혹은 취소하는 것. id를 줘서 그에 맞는 것만 완료 혹은 취소로 바꾸기.
  const handleSwitchButtonClick = (id) => {
    dispatch(switchTodo(id));
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
              <button onClick={() => handleSwitchButtonClick(item.id)}>
                {isActive ? "완료" : "취소"}
              </button>
              {/* 함수로 한 번 감씨줘야함. item.id가 반환될 수 있기 위함.*/}
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
