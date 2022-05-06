import { OnClickType } from "../types/types";

// Generated with util/create-component.js
export interface CybrModalProps {
  children: React.ReactNode;
  open: boolean;
  title: string;
  onClose?: () => void;
}
export type RenderTitleBarProps = {
  brandLogoRenderer: () => React.ReactNode;
  brandLogoOnClick: OnClickType;
  closeIconRenderer: () => React.ReactNode;
  closeIconOnClick: OnClickType;
};
export type RenderTitleBarFuncType = (depProps: RenderTitleBarProps) => any;

export type RenderIconBarProps = {
  iconRenderer: () => React.ReactNode;
  iconOnClick: OnClickType;
};

export type RenderIconBarFuncType = (depProps: RenderIconBarProps) => any;
