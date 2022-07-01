import React from "react";
import { CellRendererProps } from "./types";

export default function TextCellRenderer(props: CellRendererProps) {
  return <div>{props.value}</div>;
}
