import styled from "styled-components";
import { daysInWeek } from "../../utils/helpers";
import BlankCell from "../BlankCell";
import Cell from "../Cell/Cell";
import { useHeatMapContext } from "../HeatMap/HeatMap";

function Cells() {
  const { numOfDaysInYear, startDate } = useHeatMapContext();

  return (
    <StyledList>
      {daysInWeek.slice(0, startDate.weekday() - 1).map((_, index: number) => (
        <BlankCell key={"blank-cell-" + index} />
      ))}
      {new Array(numOfDaysInYear).fill(1).map((_, index) => (
        <Cell key={"cell-item-" + index} index={index} />
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  width: fit-content;
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: ${(12 + 4) * 7}px;
`;

export default Cells;
