import React from "react";
import { testModalContent } from "../CybrModal/test";
import { BodyProps } from "./types";
import { StyledBodyContainer, StyledBodyWrapper } from "./styles";
import { GlobalFonts } from "../globalStyle";

export default function CybrBody(props: BodyProps) {
  const { backgroundImage } = props;
  return (
    <StyledBodyWrapper
      backgroundImage={
        backgroundImage ??
        "https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg"
      }
    >
      <GlobalFonts />
      <StyledBodyContainer>{props.children}</StyledBodyContainer>
    </StyledBodyWrapper>
  );
}
