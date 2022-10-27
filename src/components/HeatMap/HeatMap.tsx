import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Cells from "../Cells";
import Weekdays from "../Weekdays";
import { generateTransactionData } from "../../utils/helpers";
import { ITransactionContextData } from "../../utils/types";
import Months from "../Months";
import styled from "styled-components";

const HeatMapContext = createContext<ITransactionContextData | any>(null);
export const useHeatMapContext = () => useContext(HeatMapContext);

function HeatMap() {
  const [loading, setLoading] = useState<boolean>(true);
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/transactions-carter.json")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => {
        setLoading(false);
      });
  }, []);

 const data = useMemo(() => generateTransactionData(transactions), [transactions]);

  if (loading) return <div>Loading</div>;
  if (error) return <div>{error}</div>;

  return (
    <HeatMapContext.Provider value={data}>
      <StyledHeatMap>
        <h1>Financial Transactions Heatmap</h1>
        <div>
          <div>
            <Weekdays />
            <Cells />
          </div>
          <Months />
        </div>
      </StyledHeatMap>
    </HeatMapContext.Provider>
  );
}
const StyledHeatMap = styled.div`
  & > div {
    border: 1px solid lightgray;
    width: fit-content;
    max-width: 100%;
    overflow-x: auto;
    padding: 2rem;
  }
  & > h1 {
    color: grey;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export default HeatMap;
