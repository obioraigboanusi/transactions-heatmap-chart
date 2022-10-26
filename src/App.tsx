import React, { useEffect, useState } from "react";
import HeatMap from "./components/HeatMap";
import transactions from "./transactions-carter.json";

interface ITransaction {
  date: string;
  transactionType: string;
  amount: number;
}
interface ITransactionData {
  date: string;
  sum: number;
  items: number[];
}

type transactionTypes = "debit" | "credit";
interface ISortedData {
  [key: string]: ITransactionData;
}

const data: ISortedData = {};

transactions.forEach((transaction: ITransaction) => {
  const value =
    transaction.transactionType === "debit"
      ? -transaction.amount
      : transaction.amount;
  if (!data.hasOwnProperty(transaction.date)) {
    data[transaction.date as keyof typeof data] = {
      date: transaction.date,
      sum: value,
      items: [value],
    };
  } else {
    data[transaction.date as keyof typeof data].sum += value;
    data[transaction.date as keyof typeof data].items.push(value);
  }
});
export const daysInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
function App() {
  const [year, setYear] = useState<number>();
  const [sortedData, setSortedData] = useState<ISortedData>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const firstDate = new Date(transactions[0].date);
    setYear(new Date(firstDate).getFullYear());
    setSortedData(data);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading</div>;

  return <HeatMap year={year as number} data={sortedData} />;
}

export default App;
