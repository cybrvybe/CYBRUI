import { TypographyVariantType } from "../CybrTypography/types";

export type CybrButtonProps = {
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  isOutlined?: boolean;
  isRounded?: boolean;
  isSmall?: boolean;
  isLarge?: boolean;
  isFullWidth?: boolean;
  text?: string;
  color?: any;
  variant?: TypographyVariantType;
  isGhost?: boolean;
};
