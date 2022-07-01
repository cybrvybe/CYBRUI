import { OnClickType } from "../types/types";

// Generated with util/create-component.js
export interface CybrModalProps {
  children: React.ReactNode;
  open: boolean;
  title: string;
  onClose?: () => void;
}
export type RenderModalContentProps = {
  brandLogoOnClick: OnClickType;
  closeIconOnClick: OnClickType;
  title: string;
  closed: boolean;
  setClosed: (close: boolean) => void;
};
