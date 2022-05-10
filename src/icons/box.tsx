import React from "react";
import styled from "styled-components";
import { IconStyle } from "./iconStyles";

export default function BoxIcon() {
  const StyledBox = styled.i`
    & {
      box-sizing: border-box;
      position: relative;
      display: block;
      transform: scale(var(--ggs, 1));
      width: 22px;
      height: 20px;
      border: 2px solid;
      border-radius: 3px;
    }
    &::after,
    &::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      border-radius: 3px;
      height: 2px;
      background: currentColor;
    }
    &::before {
      left: 6px;
      width: 6px;
      top: 8px;
    }
    &::after {
      width: 22px;
      left: -2px;
      top: 4px;
    }
  `;
  return (
    <IconStyle>
      <StyledBox />
    </IconStyle>
  );
}
