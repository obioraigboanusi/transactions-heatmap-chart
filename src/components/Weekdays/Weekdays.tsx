import styled from "styled-components";
import Weekday from "../Weekday/Weekday";

function Weekdays() {
  return (
    <StyledWeekDays>
      {new Array(7).fill(1).map((item, index) => (
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
