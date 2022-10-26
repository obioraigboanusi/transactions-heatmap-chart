import React from "react";
import styled from "styled-components";
import Cell from "../Cell/Cell";

function Cells() {
  return (
    <StyledList>
      {new Array(200).fill(1).map((item, index) => (
        <Cell key={"cell-item" + index} />
      ))}
    </StyledList>
  );
}
const StyledList = styled.ul`
  width: fit-content;
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: ${(10 + 4) * 7}px;
`;

export default Cells;
