import React, { useState } from "react";
import { CybrButtonProps } from "./types";
import { StyledCybrButton } from "./styles";
import CybrTypography from "../CybrTypography";
import {
  getOpacityTransitionMotionVariants,
  getScalingTransition,
} from "../assets/motionVariants/motionVariants";
import { getDirectionTransitionMotionVariants } from "./../assets/motionVariants/motionVariants";
import {
  addTransitionToMotionVariants,
  mergeMotionVariants,
} from "./../assets/motionVariants/helpers";

export default function CybrButton(props: CybrButtonProps) {
  const [isHovering, setIsHovering] = useState(false);

  const mergedMotionVariants = mergeMotionVariants(
    getScalingTransition(),
    getOpacityTransitionMotionVariants()
  );

  const motionVariants = addTransitionToMotionVariants(
    mergedMotionVariants,
    0.2
  );
  const buttonProps = {
    ...(props.color && {
      color: props.color,
    }),
    onClick: props.onClick,
  };

  const handleHover = (e: any, bool: boolean) => {
    setIsHovering(bool);
  };

  const renderNotHovering = () => {
    return (
      <CybrTypography font="Phage" variant={props.variant ?? "h5"}>
        {props.children ?? <p>{props.text}</p>}
      </CybrTypography>
    );
  };
  return (
    <StyledCybrButton
      key="cybrButton"
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
      variants={motionVariants}
      isRounded={props.isRounded}
      isGhost={props.isGhost}
      {...buttonProps}
    >
      {renderNotHovering()}
    </StyledCybrButton>
  );
}
