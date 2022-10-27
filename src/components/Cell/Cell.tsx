import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import moment from "moment";
import { useHeatMapContext } from "../HeatMap/HeatMap";

const baseId = "transaction-cell-";

function Cell({ index }: { index: number }) {
  const { sortedData, maxSum, minSum, year } = useHeatMapContext();
  const { sum, items, date } = sortedData[index + 1] || {};

  const bgColor =
    sum > 0
      ? `rgba(0, 128, 0, ${sum / maxSum})`
      : sum < 0
      ? `rgba(255, 0, 0, ${sum / minSum})`
      : null;
  const title = date
    ? moment(date).format("ddd, LL")
    : moment(new Date(year?.toString())).add(index, "days").format("ddd, LL");

  return (
    <>
      <StyledCell data-tip data-for={baseId + index} $bgColor={bgColor} />
      <ReactTooltip id={baseId + index} place="top" type="dark" effect="float">
        <h3>{title}</h3>
        {date ? (
          <>
            <span>Sum: {sum}</span>
            <br />
            <span>Transactions: {items?.length}</span>
          </>
        ) : (
          <span>No transactions</span>
        )}
      </ReactTooltip>
    </>
  );
}

interface Props {
  $bgColor: string | null;
}

const StyledCell = styled.li<Props>`
  height: 12px;
  width: 12px;
  margin: 2px;
  background-color: ${({ $bgColor }) => $bgColor || "lightgray"};
  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export default Cell;
