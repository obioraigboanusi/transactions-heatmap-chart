import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { useHeatMapContext } from "../HeatMap/HeatMap";

function Cell({ index }: { index: number }) {
  const { sortedData, maxSum, minSum } = useHeatMapContext();
  const { sum } = sortedData[index + 1] || {};

  const bgColor =
    sum > 0
      ? `rgba(255, 0, 0, ${sum / maxSum})`
      : sum < 0
      ? ` rgba(0, 128, 0, ${sum / minSum})`
      : null;

  return <StyledCell $bgColor={bgColor} />;
}
interface Props {
  $bgColor: string | null;
}

const StyledCell = styled.li<Props>`
  height: 10px;
  width: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 2px;
  border-radius: 2px;
  background-color: ${({ $bgColor }) => $bgColor || "rgba(0, 0, 0, 0.05)"};
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export default Cell;
