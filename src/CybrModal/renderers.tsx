import React from "react";
import { renderDragonLogo } from "../icons/dragonAu7oma7a";
import { renderXIcon } from "../icons/x";
import PieChart from "../PieChart/PieChart";
import { RenderModalContentProps } from "./CybrModal.types";
import {
  getOpacityTransitionMotionVariants,
  getScalingTransition,
  styledModalWrapperMotionVariants,
} from "../assets/motionVariants/motionVariants";
import { StyledWrapper, StyledContainer } from "./styles";
import { ModalTitleBar } from "./ModalTitleBar";
import { ModalActionBar } from "./ModalActionBar";
import { ModalActionBarProps } from "./ModalActionBar/types";
import { ModalTitleBarProps } from "./ModalTitleBar/types";
import { motion } from "framer-motion";
import { getDirectionTransitionMotionVariants } from "./../assets/motionVariants/motionVariants";
import { mergeMotionVariants } from "../assets/motionVariants/helpers";
import { testModalContent } from "./test";
import { colors } from "../assets/colors/colors";
import CybrTypography from "./../CybrTypography/index";
import ModalPromptBar from "./ModalPromptBar";

export const renderModalBody = () => {
  return (
    <motion.div
      key="modalBodywrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        fontFamily: "Libel Suit",
        color: colors.white.main(1),
        padding: "2rem 3rem",
        maxHeight: "60vh",
        overflowY: "auto",
        margin: "auto",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      variants={getOpacityTransitionMotionVariants()}
    >
      <div
        style={{
          padding: "1rem",
          left: 0,
        }}
      >
        <CybrTypography variant="h1" font="Libel Suit" isBold isUppercase>
          Intelligent Automata Networks (IANs)
        </CybrTypography>
      </div>
      <div
        style={{
          padding: "1rem",
        }}
      >
        <CybrTypography variant="h5" font="Libel Suit">
          {testModalContent}
        </CybrTypography>
      </div>
    </motion.div>
  );
};

export const renderModalContent = (props: RenderModalContentProps) => {
  const titleBarprops: ModalTitleBarProps = {
    brandLogoRenderer: renderDragonLogo,
    brandLogoOnClick: props.brandLogoOnClick,
    closeIconRenderer: renderXIcon,
    closeIconOnClick: props.closeIconOnClick,
    title: props.title,
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <StyledWrapper exit={getOpacityTransitionMotionVariants().exit} />
      <StyledContainer
        key="style-container"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={styledModalWrapperMotionVariants}
      >
        <ModalTitleBar {...titleBarprops} />
        {renderModalBody()}
        <ModalPromptBar
          prompt="Would you like to save your changes?"
          confirmProps={{
            text: "Save",
            onClick: (e: any) => console.log("saved"),
          }}
          cancelProps={{
            text: "Cancel",
            onClick: props.closeIconOnClick,
          }}
        />
      </StyledContainer>
    </div>
  );
};
