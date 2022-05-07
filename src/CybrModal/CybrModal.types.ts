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
  title: string;
};
export type RenderTitleBarFuncType = (depProps: RenderTitleBarProps) => any;

export type RenderIconBarProps = {
  iconRenderer: () => React.ReactNode;
  iconOnClick: OnClickType;
};

export type RenderIconBarFuncType = (depProps: RenderIconBarProps) => any;

export type RenderModalContentProps = {
  brandLogoOnClick: OnClickType;
  closeIconOnClick: OnClickType;
  title: string;
  closed: boolean;
  setClosed: (close: boolean) => void;
};
