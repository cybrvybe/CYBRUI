import React from "react";
import styled from "styled-components";
import { IconStyle } from "./iconStyles";

export default function BlockIcon() {
  const StyledBlock = styled.i`
    & {
      box-sizing: border-box;
      position: relative;
      display: block;
      transform: scale(var(--ggs, 1));
      width: 16px;
      height: 16px;
      border: 2px solid;
      border-radius: 100%;
    }
    &::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 10px;
      height: 2px;
      background: currentColor;
      border-radius: 5px;
      transform: rotate(-45deg);
      top: 5px;
      left: 1px;
    }
  `;
  return (
    <IconStyle>
      <StyledBlock />
    </IconStyle>
  );
}
