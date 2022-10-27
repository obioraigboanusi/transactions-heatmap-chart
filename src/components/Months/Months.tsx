import moment from "moment";
import styled from "styled-components";
import { useHeatMapContext } from "../HeatMap/HeatMap";
import Month from "../Month/Month";

function Months() {
  const { numOfDaysInYear, startDate } = useHeatMapContext();
  return (
    <StyledMonths>
      {new Array(numOfDaysInYear).fill(1).map((_, index) => {
        const month = moment(startDate)
          .add(index * 7, "day")
          .format("MMM");
        return <Month key={"month-item-" + index} month={month} />;
      })}
    </StyledMonths>
  );
}

const StyledMonths = styled.ul`
  display: flex;
  padding-left: 30px;
  max-width: ${(12 + 4) * 53 + 30}px;
  overflow-x: hidden;

  .Jan ~ .Jan,
  .Feb ~ .Feb,
  .Mar ~ .Mar,
  .Apr ~ .Apr,
  .May ~ .May,
  .Jun ~ .Jun,
  .Jul ~ .Jul,
  .Aug ~ .Aug,
  .Sep ~ .Sep,
  .Oct ~ .Oct,
  .Nov ~ .Nov,
  .Dec ~ .Dec {
    visibility: hidden;
  }
`;

export default Months;
