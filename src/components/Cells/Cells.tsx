import React from "react";
import styled from "styled-components";
import { daysInWeek } from "../../App";
import BlankCell from "../BlankCell";
import Cell from "../Cell/Cell";

function Cells({
  numOfDaysInYear,
  startDate,
}: {
  numOfDaysInYear: number;
  startDate: any;
}) {
  return (
    <StyledList>
      {daysInWeek.slice(0, startDate.weekday()).map((day, index) => (
        <BlankCell key={"blank-cell-" + index} />
      ))}
      {new Array(numOfDaysInYear).fill(1).map((item, index) => (
        <Cell key={"cell-item-" + index} />
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
