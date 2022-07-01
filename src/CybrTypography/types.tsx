export type TypographyVariantType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";
export type TypographyFontType =
  | "Phage"
  | "Libel Suit"
  | "Marske"
  | "Nidsans"
  | "Astro";
export type CybrTypographyProps = {
  children: React.ReactNode;
  variant?: TypographyVariantType;
  font?: TypographyFontType;
  isBold?: boolean;
  letterSpacing?: string;
  isUppercase?: boolean;
  color?: any;
};
