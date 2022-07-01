import React from "react";
import { StyledTypographyWrapper } from "./styles";
import { CybrTypographyProps } from "./types";

export default function CybrTypography(props: CybrTypographyProps) {
  return <StyledTypographyWrapper {...props}>
    {props.children}
  </StyledTypographyWrapper>;
}
