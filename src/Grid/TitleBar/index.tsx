import React from "react";
import { TableTitleBarProps } from "./types";

export default function TableTitleBar(props: TableTitleBarProps) {
  return (
    <div
      style={{
        width: "100%",
        fontFamily: "Phage",
        fontSize: "1.5rem",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>{props.titleValue}</div>
    </div>
  );
}
