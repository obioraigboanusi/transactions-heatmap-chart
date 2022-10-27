import React from "react";
import styled from "styled-components";

function BlankCell() {
  return <StyledBlankCell />;
}
const StyledBlankCell = styled.li`
  height: 12px;
  width: 12px;
  margin: 2px;
`;

export default BlankCell;
