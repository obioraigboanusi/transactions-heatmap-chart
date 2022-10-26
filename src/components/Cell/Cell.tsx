import React from "react";
import styled from "styled-components";

function Cell() {
  return <StyledCell />;
}
const StyledCell = styled.li`
  height: 10px;
  width: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 2px;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.05);
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;
export default Cell;
