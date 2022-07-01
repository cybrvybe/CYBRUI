import React, { useState } from "react";
import Cell from "../Cell";
import ColHeadersBar from "../ColHeadersBar";
import TableTitleBar from "../TitleBar";
import { renderCells } from "./dataHelpers";
import { colHeaders, rows } from "./fakeData";
import { GridProps, RowType } from "./types";

export default function Grid(props: GridProps) {
  const [isHoveringOnRows, setIsHoveringOnRows] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
      }}
    >
      <TableTitleBar titleValue="Income Streams" />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "stretch",
        }}
      >
        <ColHeadersBar colHeaders={props.colHeaders} />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          height: "20rem",
          overflowY: isHoveringOnRows ? "scroll" : "hidden",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        onMouseOver={(e: any) => setIsHoveringOnRows(true)}
        onMouseOut={(e: any) => setIsHoveringOnRows(false)}
      >
        {renderCells(props.isCompact, props.colHeaders, props.rows)}
      </div>
    </div>
  );
}
