import { CellProps } from "../Cell/types";
import { ColHeaderType } from "../ColHeadersBar/types";

export interface TableProps {
  rows: RowType[];
  colHeaders: ColHeaderType[];
  isCompact?: boolean;
}

export type RowType = {
  cells: CellProps[];
};
