export interface CellProps {
  value?: any;
  isCompact?: boolean;
  cellRendererType?: CellRendererTypes;
  rowIndex: number;
  columnIndex: number;
  colHeaderKey: string;
  numColumns: number;
}

export type CellRendererTypes =
  | "text"
  | "image"
  | "link"
  | "button"
  | "checkbox"
  | "radio"
  | "select"
  | "date"
  | "datetime"
  | "time"
  | "currency"
  | "number"
  | "percent"
  | "progress"
  | "rating"
  | "slider"
  | "switch"
  | "textarea"
  | "toggle"
  | "tree"
  | "treegrid"
  | "treelist"
  | "treemap"
  | "treemapgrid"
  | "treemapheatmap"
  | "treemap treemapgrid treemapheatmap";
