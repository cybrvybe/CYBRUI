import { OnClickType } from "../../types/types";

export type ModalTitleBarProps = {
  brandLogoRenderer: () => React.ReactNode;
  brandLogoOnClick: OnClickType;
  closeIconRenderer: (color?: any) => any;
  closeIconOnClick: OnClickType;
  title: string;
};
