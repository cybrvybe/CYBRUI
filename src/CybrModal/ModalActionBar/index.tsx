import React from "react";
import { colors } from "../../assets/colors/colors";
import { getScalingTransition } from "../../assets/motionVariants/motionVariants";
import { StyledIconBarWrapper } from "../styles";
import { ModalActionBarProps } from "./types";

export function ModalActionBar(props: ModalActionBarProps) {
  const iconTransition = getScalingTransition({ isInverted: false });

  return (
    <StyledIconBarWrapper
      key="iconBarWrapper"
      variants={iconTransition}
      animate="visible"
      onClick={(e: any) => props.close.iconOnClick(e)}
    >
      {props.close.iconRenderer(colors.red.main(0.8))}
    </StyledIconBarWrapper>
  );
}
