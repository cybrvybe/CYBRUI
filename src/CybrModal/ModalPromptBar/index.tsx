import React from "react";
import { colors } from "../../assets/colors/colors";
import CybrButton from "../../CybrButton";
import CybrTypography from "../../CybrTypography";
import { StyledModalPromptBarWrapper } from "./styles";
import { ModalPromptBarProps } from "./types";
import { mergeMotionVariants } from "./../../assets/motionVariants/helpers";
import {
  getDirectionTransitionMotionVariants,
  getScalingTransition,
} from "../../assets/motionVariants/motionVariants";
import { m } from "framer-motion";

export default function ModalPromptBar(props: ModalPromptBarProps) {
  return (
    <StyledModalPromptBarWrapper
      key="modalPromptBarWrapper"
      variants={mergeMotionVariants(
        getDirectionTransitionMotionVariants({
          orientation: "horizontal",
        }),
        getScalingTransition()
      )}
    >
      <div
        style={{
          paddingLeft: "1rem",
        }}
      >
        <CybrTypography font="Phage" isUppercase variant="p" isBold>
          {props.prompt}
        </CybrTypography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: "1rem",
        }}
      >
        <div
          style={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
        >
          <CybrButton
            onClick={props.cancelProps.onClick}
            color={colors.red.main(0.8)}
            variant={"span"}
            isGhost
          >
            <p style={{ padding: "0rem" }}>{props.cancelProps.text}</p>
          </CybrButton>
        </div>
        <div
          style={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
        >
          <CybrButton
            text={props.confirmProps.text}
            onClick={props.confirmProps.onClick}
            color={colors.green.neon(0.5)}
            variant="span"
            isGhost
          >
            <p style={{ padding: "0rem" }}>{props.confirmProps.text}</p>
          </CybrButton>
        </div>
      </div>
    </StyledModalPromptBarWrapper>
  );
}
