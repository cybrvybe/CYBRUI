import { OnClickType } from "../../types/types";

export type ModalPromptBarProps = {
  prompt: string;
  confirmProps: {
    text: string;
    onClick: OnClickType;
  };
  cancelProps: {
    text: string;
    onClick: OnClickType;
  };
};
