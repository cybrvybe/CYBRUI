import React from 'react';
import styled from 'styled-components';
import { IconStyle } from './iconStyles';

export default function AirplaneIcon() {
    const StyledAirplane = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
    transform: scale(var(--ggs, 1));
    background: linear-gradient(to left, currentColor 22px, transparent 0) no-repeat center/16px 2px,
      radial-gradient(circle, currentColor 60%, transparent 40%) no-repeat right center/2px 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 10px;
    height: 8px;
    border-right: 4px solid;
  }
  &::before {
    border-top-right-radius: 2px;
    top: 0;
    transform: perspective(10px) rotateX(10deg) skewX(30deg);
    box-shadow: -4px 3px 0 -2px;
  }
  &::after {
    border-bottom-right-radius: 2px;
    bottom: 0;
    transform: perspective(10px) rotateX(-10deg) skewX(-30deg);
    box-shadow: -4px -3px 0 -2px;
  }
`
return (
    <IconStyle>
        <StyledAirplane />
    </IconStyle>
)
}