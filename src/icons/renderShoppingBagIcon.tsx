import React from "react";
import styled from "styled-components";
import { IconStyle } from "./iconStyles";

export default function renderShoppingBagIcon() {
  const StyledShoppingBag = styled.i`
    & {
      transform: scale(var(--ggs, 1));
    }
    &,
    &::after {
      box-sizing: border-box;
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      border: 2px solid;
      border-radius: 3px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 6px;
      border-bottom-left-radius: 120px;
      border-bottom-right-radius: 120px;
      border-top: 0;
      top: 2px;
      left: 3px;
    }
  `;
  return (
    <IconStyle>
      <StyledShoppingBag />
    </IconStyle>
  );
}
