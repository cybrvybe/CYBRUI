import React from "react";
import styled from "styled-components";
import { IconStyle } from "./iconStyles";

export default function CarouselIcon() {
  const StyledCarousel = styled.i`
    & {
      box-sizing: border-box;
      position: relative;
      display: block;
      transform: scale(var(--ggs, 1));
      width: 22px;
      height: 18px;
    }
    &::after,
    &::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      border-radius: 3px;
    }
    &::before {
      width: 22px;
      height: 10px;
      border: 2px solid;
    }
    &::after {
      width: 10px;
      height: 2px;
      background: currentColor;
      top: 16px;
      left: 6px;
      box-shadow: -3px -4px 0, 3px -4px 0;
    }
  `;
  return (
    <IconStyle>
      <StyledCarousel />
    </IconStyle>
  );
}
