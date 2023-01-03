import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <p>Header</p>
      <p>물주먹</p>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  justify-content: space-between;
  display: flex;
`;
