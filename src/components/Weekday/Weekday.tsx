import styled from "styled-components";
import { daysInWeek } from "../../utils/helpers";

function Weekday({ index }: { index: number }) {
  return (
    <StyledWeekDay>
      <span>{daysInWeek[index]}</span>
    </StyledWeekDay>
  );
}

const StyledWeekDay = styled.li`
  font-size: 10px;
  height: 12px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  span {
    vertical-align: middle;
    line-height: 1;
  }
`;

export default Weekday;
