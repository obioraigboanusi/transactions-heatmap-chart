import React from "react";
import styled from "styled-components";

function BlankCell() {
  return <StyledBlankCell />;
}
const StyledBlankCell = styled.li`
  height: 10px;
  width: 10px;
  border: 1px solid transparent;
  margin: 2px;
  border-radius: 2px;
`;

export default BlankCell;
