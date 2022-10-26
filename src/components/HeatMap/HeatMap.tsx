import { createContext, useContext, useEffect, useState } from "react";
import Cells from "../Cells";
import Weekdays from "../Weekdays";
import { generateTransactionData } from "../../utils/helpers";
import { ITransactionContextData } from "../../utils/types";
import Months from "../Months";

const HeatMapContext = createContext<ITransactionContextData | any>(null);
export const useHeatMapContext = () => useContext(HeatMapContext);

function HeatMap() {
  const [loading, setLoading] = useState<boolean>(true);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("/transactions-carter.json")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => console.log(error.message))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading</div>;

  const {
    sortedData,
    year,
    firstDate,
    maxSum,
    minSum,
    numOfDaysInYear,
    startDate,
    endDate,
  } = generateTransactionData(transactions);

  return (
    <HeatMapContext.Provider
      value={{
        sortedData,
        year,
        firstDate,
        maxSum,
        minSum,
        numOfDaysInYear,
        startDate,
        endDate,
      }}
    >
      <div>
        <div>
          <Weekdays />
          <Cells />
        </div>
        <Months />
      </div>
    </HeatMapContext.Provider>
  );
}

export default HeatMap;
