import React from "react";
import styled from "styled-components";
import { IconStyle } from "./iconStyles";

export default function renderCreditCardIcon() {
  const StyledCreditCard = styled.i`
    & {
      box-sizing: border-box;
      position: relative;
      display: block;
      transform: scale(var(--ggs, 1));
      width: 24px;
      height: 18px;
      border: 2px solid;
      border-radius: 4px;
    }
    &::after,
    &::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      border-radius: 3px;
      width: 24px;
      left: -2px;
      height: 2px;
      background: currentColor;
      top: 9px;
    }
    &::before {
      width: 6px;
      left: 2px;
      top: 3px;
    }
  `;
  return (
    <IconStyle>
      <StyledCreditCard />
    </IconStyle>
  );
}
