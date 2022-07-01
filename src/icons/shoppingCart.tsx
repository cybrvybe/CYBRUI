import React from "react";
import styled from "styled-components";
import { IconStyle } from "./iconStyles";

export default function ShoppingCartIcon(color?: any) {
  const StyledShoppingCart = styled.i`
    & {
      display: block;
      box-sizing: border-box;
      position: relative;
      transform: scale(var(--ggs, 1));
      width: 20px;
      height: 21px;
      background: linear-gradient(to left, currentColor 12px, transparent 0)
          no-repeat -1px 6px/18px 2px,
        linear-gradient(to left, currentColor 12px, transparent 0) no-repeat 6px
          14px/11px 2px,
        linear-gradient(to left, currentColor 12px, transparent 0) no-repeat 0
          2px/4px 2px,
        radial-gradient(circle, currentColor 60%, transparent 40%) no-repeat
          12px 17px/4px 4px,
        radial-gradient(circle, currentColor 60%, transparent 40%) no-repeat 6px
          17px/4px 4px;
    }
    &::after,
    &::before {
      content: "";
      display: block;
      position: absolute;
      box-sizing: border-box;
      width: 2px;
      height: 14px;
      background: currentColor;
      top: 2px;
      left: 4px;
      transform: skew(12deg);
    }
    &::after {
      height: 10px;
      top: 6px;
      left: 16px;
      transform: skew(-12deg);
    }
  `;
  return (
    <IconStyle {...(color && color)}>
      <StyledShoppingCart />
    </IconStyle>
  );
}
