import { ColHeaderType } from "../ColHeadersBar/types";
import { generateColHeaderParamsFromColHeaderLabels } from "./dataHelpers";

export const colHeaderLabels: string[] = [
  "Title",
  "Type",
  "Amount",
  "Previous Activity",
  "Next Activity",
  "Status",
];

export const rows: any[] = [
  {
    title: "Job 1",
    type: "revenue",
    amount: 1835,
    previousActivity: new Date().toString(),
    nextActivity: new Date().toString(),
    status: "pending",
  },
  {
    title: "Job 2",
    type: "revenue",
    amount: 1835,
    previousActivity: new Date().toString(),
    nextActivity: new Date().toString(),
    status: "pending",
  },
  {
    title: "Phone Service",
    type: "expense",
    amount: 140,
    previousActivity: new Date().toString(),
    nextActivity: new Date().toString(),
    status: "pending",
  },
];

const appendRowsToRows = (initData: any[], iter: number, data: any[]) => {
  for (let index = 0; index < iter; index++) {
    data.forEach((entry) => {
      initData.push(entry);
    });
    index = index + 1;
  }

  return initData;
};

export const extendedRows = appendRowsToRows(rows, 5, rows);

export const colHeaders: ColHeaderType[] =
  generateColHeaderParamsFromColHeaderLabels(colHeaderLabels);
