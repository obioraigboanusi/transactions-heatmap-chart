import React from "react";
import styled from "styled-components";

const daysInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function Weekday({ index = 0 }: { index: number }) {
  return <StyledWeekDay>{daysInWeek[index]}</StyledWeekDay>;
}

const StyledWeekDay = styled.li`
  font-size: 10px;
  height: 10px;
  border: 1px solid transparent;
  margin: 2px;
  vertical-align: middle;
  text-align: end;
`;

export default Weekday;
