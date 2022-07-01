import { ColHeaderType } from "../ColHeadersBar/types";
import React from "react";
import { toCamelCase } from "../../utils/formatters";
import { RowType } from "./types";
import Cell from "../Cell";
import { colHeaders } from "./fakeData";

export const generateColHeaderParamsFromColHeaderLabels = (
  colHeaderLabels: string[]
) => {
  const colHeaders: ColHeaderType[] = colHeaderLabels.map(
    (colHeaderLabel, index) => {
      return {
        label: colHeaderLabel,
        key: toCamelCase(colHeaderLabel),
        colIndex: index,
        dataType: "text",
        width: 100,
        align: "left",
        sortable: true,
      };
    }
  );
  return colHeaders;
};

export const renderCells = (
  isCompact: boolean,
  colHeaders: ColHeaderType[],
  rows: RowType[]
) => {
  return rows.map((row: any, rowIndex: number) => {
    return colHeaders.map((colHeader: ColHeaderType, colIndex: number) => {
      const rowByKey = row[colHeader.key];
      if (rowByKey) {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: (100 / colHeaders.length).toString() + "%",
            }}
          >
            <Cell
              rowIndex={rowIndex}
              columnIndex={colIndex}
              colHeaderKey={colHeader.key}
              value={row[colHeader.key]}
              cellRendererType={colHeader.dataType}
              numColumns={colHeaders.length}
              isCompact={isCompact}
            ></Cell>
          </div>
        );
      }
    });
  });
};
