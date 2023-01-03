import React from "react";
import styled from "styled-components";

function Footer() {
  return <StyledFooter>Footer</StyledFooter>;
}

export default Footer;

const StyledFooter = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  justify-content: space-between;
  display: flex;
`;
