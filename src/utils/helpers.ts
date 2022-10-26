import moment from "moment";
import { ISortedData, ITransaction, ITransactionContextData } from "./types";

export const generateTransactionData = (
  transactions: ITransaction[]
): ITransactionContextData => {
  const data: ISortedData = {};
  const values: number[] = [];

  transactions.forEach((transaction: ITransaction) => {
    const key = moment(transaction.date).dayOfYear() as keyof typeof data;
    const value =
      transaction.transactionType === "debit"
        ? -transaction.amount
        : transaction.amount;

    if (!data.hasOwnProperty(key)) {
      data[key] = {
        date: transaction.date,
        sum: value,
        items: [value],
      };
    } else {
      data[key].sum += value;
      data[key].items.push(value);
    }
  });

  Object.values(data).forEach((item) => {
    if (!values.includes(item.sum)) {
      values.push(item.sum);
    }
  });

  const firstDate = new Date(transactions[0].date);
  const year = new Date(firstDate).getFullYear();
  const maxSum = Math.max(...values);
  const minSum = Math.min(...values);
  const startDate = moment(new Date(year?.toString()));
  const endDate = moment(new Date((year + 1).toString()));
  const numOfDaysInYear = endDate.diff(startDate, "days");

  return {
    sortedData: data,
    year,
    firstDate,
    maxSum,
    minSum,
    numOfDaysInYear,
    startDate,
    endDate,
  };
};

export const daysInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
