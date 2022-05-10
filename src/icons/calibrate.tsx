import React from "react";
import styled from "styled-components";
import { IconStyle } from "./iconStyles";

export default function CalibrateIcon() {
  const StyledCalibrate = styled.i`
    & {
      display: block;
      box-sizing: border-box;
      position: relative;
      transform: scale(var(--ggs, 1));
      width: 18px;
      height: 18px;
      overflow: hidden;
    }
    &::after,
    &::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      border-radius: 22px;
    }
    &::before {
      width: 6px;
      height: 6px;
      background: currentColor;
      top: 10px;
      left: 6px;
    }
    &::after {
      width: 22px;
      height: 22px;
      border: 6px solid transparent;
      border-top: 6px solid;
      left: -2px;
      top: 1px;
    }
  `;

  return (
    <IconStyle>
      <StyledCalibrate />
    </IconStyle>
  );
}
