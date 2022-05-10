import React from "react";
import styled from "styled-components";
import { styledModalWrapperMotionVariants } from "../assets/motionVariants/motionVariants";
import { IconMotionVariants, IconStyle } from "./iconStyles";

export const renderXIcon = () => {
  const StyledClose = styled.i`
    & {
      box-sizing: border-box;
      position: relative;
      display: block;
      transform: scale(var(--ggs, 1));
      width: 22px;
      height: 22px;
      border: 2px solid transparent;
      border-radius: 40px;
    }
    &::after,
    &::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 16px;
      height: 2px;
      background: currentColor;
      transform: rotate(45deg);
      border-radius: 5px;
      top: 8px;
      left: 1px;
    }
    &::after {
      transform: rotate(-45deg);
    }
  `;
  return (
    <IconStyle
      initial={styledModalWrapperMotionVariants.hidden}
      animate={styledModalWrapperMotionVariants.visible}
      onHoverStart={(e) => IconMotionVariants.hover}
      whileHover={IconMotionVariants.hover}
      onHoverEnd={(e) => IconMotionVariants.unHover}
    >
      <StyledClose />
    </IconStyle>
  );
};
