import { OnClickType } from "../../types/types";

export type ActionIconType = {
  iconRenderer: (color?: any) => React.ReactNode;
  iconOnClick: OnClickType;
};

export type ModalActionBarProps = {
  close: ActionIconType;
};
