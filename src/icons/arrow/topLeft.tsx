import React from "react";
import styled from "styled-components";

export default function TopLeftArrowIcon() {
  const StyledArrowTopLeft = styled.i`
    & {
      box-sizing: border-box;
      position: relative;
      display: block;
      width: 8px;
      height: 8px;
      transform: scale(var(--ggs, 1));
      border-top: 2px solid;
      border-left: 2px solid;
    }
    &::after {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 14px;
      height: 2px;
      background: currentColor;
      transform: rotate(45deg);
      top: 3px;
      left: -3px;
    }
  `;
  return <StyledArrowTopLeft />;
}
