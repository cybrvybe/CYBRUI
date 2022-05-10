import React from "react";
import styled from "styled-components";
import { IconStyle } from "./iconStyles";

export default function ArrowsExchangeIcon() {
  const StyledArrowsExchangeAlt = styled.i`
    & {
      box-sizing: border-box;
      position: relative;
      display: block;
      transform: scale(var(--ggs, 1));
      width: 16px;
      height: 14px;
    }
    &::after,
    &::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      height: 2px;
      background: currentColor;
      border-radius: 4px;
    }
    &::before {
      width: 6px;
      transform: rotate(-45deg);
      box-shadow: -2px -13px 0;
      right: 0;
      top: 10px;
    }
    &::after {
      width: 12px;
      box-shadow: 4px 4px 0;
      top: 4px;
    }
  `;
  return (
    <IconStyle>
      <StyledArrowsExchangeAlt />
    </IconStyle>
  );
}
