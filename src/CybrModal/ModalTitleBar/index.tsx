import React from "react";
import { getDirectionTransitionMotionVariants } from "../../assets/motionVariants/motionVariants";
import CybrTypography from "../../CybrTypography";
import { ModalActionBar } from "../ModalActionBar";
import { ModalActionBarProps } from "../ModalActionBar/types";

import { StyledTitleBarWrapper, StyledTitleWrapper } from "./styles";
import { ModalTitleBarProps } from "./types";

export function ModalTitleBar(props: ModalTitleBarProps) {
  const modalActionBarProps: ModalActionBarProps = {
    close: {
      iconRenderer: props.closeIconRenderer,
      iconOnClick: props.closeIconOnClick,
    },
  };
  const directionTransition = getDirectionTransitionMotionVariants({
    orientation: "horizontal",
    isInverted: true,
  });
  return (
    <StyledTitleBarWrapper variants={directionTransition} key="titleBarWrapper">
      <StyledTitleWrapper>
        <CybrTypography font="Phage" variant="h6" isUppercase>
          {props.title}
        </CybrTypography>
      </StyledTitleWrapper>
      <ModalActionBar {...modalActionBarProps} />
    </StyledTitleBarWrapper>
  );
}
