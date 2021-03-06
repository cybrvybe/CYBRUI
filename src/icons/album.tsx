import React from "react";
import styled from "styled-components";
import { IconStyle } from "./iconStyles";

export default function AlbumIcon() {
  const StyledAlbum = a.i`
    & {
      box-sizing: border-box;
      position: relative;
      display: block;
      width: 18px;
      height: 18px;
      transform: scale(var(--ggs, 1));
      border-left: 7px solid transparent;
      border-right: 3px solid transparent;
      border-bottom: 8px solid transparent;
      box-shadow: 0 0 0 2px, inset 6px 4px 0 -4px, inset -6px 4px 0 -4px;
      border-radius: 3px;
    }
    &::after,
    &::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 2px;
      height: 5px;
      background: currentColor;
      transform: rotate(46deg);
      top: 5px;
      right: 4px;
    }
    &::after {
      transform: rotate(-46deg);
      right: 2px;
    }
  `;

  return (
    <IconStyle>
      <StyledAlbum />
    </IconStyle>
  );
}
