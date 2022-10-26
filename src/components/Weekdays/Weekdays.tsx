import styled from "styled-components";
import { daysInWeek } from "../../utils/helpers";
import Weekday from "../Weekday/Weekday";

function Weekdays() {
  return (
    <StyledWeekDays>
      
      {daysInWeek.map((item, index) => (
        <Weekday key={"cell-item" + index} index={index} />
      ))}
    </StyledWeekDays>
  );
}
const StyledWeekDays = styled.ul`
  display: inline-flex;
  flex-direction: column;
  width: 30px;
`;
export default Weekdays;
