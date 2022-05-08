import React from "react";
import styled from "styled-components";
import { IconStyle } from "./iconStyles";

export default function renderExpandIcon() {
  const StyledArrowsExpandRight = styled.i`
    & {
      box-sizing: border-box;
      position: relative;
      display: block;
      transform: scale(var(--ggs, 1));
      width: 14px;
      height: 14px;
      margin: 2px;
      box-shadow: -6px 6px 0 -4px, 6px -6px 0 -4px;
    }
    &::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 2px;
      height: 22px;
      top: -4px;
      left: 6px;
      transform: rotate(45deg);
      border-top: 9px solid;
      border-bottom: 9px solid;
    }
  `;

  return (
    <IconStyle>
      <StyledArrowsExpandRight />
    </IconStyle>
  );
}
