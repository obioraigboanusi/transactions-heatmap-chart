export interface ITransaction {
  date: string;
  transactionType: string;
  amount: number;
}
export interface ITransactionData {
  date: string;
  sum: number;
  items: number[];
}

// type transactionTypes = "debit" | "credit";
export interface ISortedData {
  [key: string]: ITransactionData;
}

export interface ITransactionContextData {
        sortedData: ISortedData;
        year: number;
        firstDate: Date;
        maxSum: number;
        minSum: number;
        numOfDaysInYear: number;
        startDate: moment.Moment;
        endDate: moment.Moment;
      }