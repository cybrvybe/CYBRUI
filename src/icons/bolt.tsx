import React from "react";
import styled from "styled-components";
import { IconStyle } from "./iconStyles";

export default function BoltIcon() {
  const StyledBolt = styled.i`
    & {
      box-sizing: border-box;
      position: relative;
      display: block;
      transform: scale(var(--ggs, 1));
      width: 6px;
      height: 21px;
    }
    &::after,
    &::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 0;
      height: 0;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      transform: rotate(30deg);
    }
    &::before {
      border-bottom: 12px solid;
      left: 0;
      top: 0;
    }
    &::after {
      border-top: 12px solid;
      right: 0;
      bottom: 0;
    }
  `;

  return (
    <IconStyle>
      <StyledBolt />
    </IconStyle>
  );
}
