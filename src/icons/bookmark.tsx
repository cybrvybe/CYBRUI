import React from "react";
import styled from "styled-components";
import { IconStyle } from "./iconStyles";

export default function BookmarkIcon() {
  const StyledBookmark = styled.i`
    &,
    &::after {
      display: block;
      box-sizing: border-box;
      border-top-right-radius: 3px;
    }
    & {
      border: 2px solid;
      border-bottom: 0;
      border-top-left-radius: 3px;
      overflow: hidden;
      position: relative;
      transform: scale(var(--ggs, 1));
      width: 14px;
      height: 16px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      border-top: 2px solid;
      border-right: 2px solid;
      transform: rotate(-45deg);
      top: 9px;
      left: -1px;
    }
  `;
  return (
    <IconStyle>
      <StyledBookmark />
    </IconStyle>
  );
}
