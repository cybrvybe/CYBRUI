import { CellRendererTypes } from "../Cell/types";

export type ColHeaderType = {
  label: string;
  key: string;
  colIndex: number;
  dataType: CellRendererTypes;
  width?: number;
  align?: "left" | "center" | "right";
  sortable?: boolean;
};

export type ColSortStateType = {
  colKey: string;
  direction: boolean | null;
};

export interface ColHeadersBarProps {
  colHeaders: ColHeaderType[];
}
