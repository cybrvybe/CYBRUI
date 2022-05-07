import { AnimatePresence } from "framer-motion";
import React from "react";
import { renderDragonLogo } from "../icons/renderDragonLogo";
import { renderXIcon } from "../icons/renderXIcon";
import PieChart from "../PieChart/PieChart";
import {
  RenderTitleBarFuncType,
  RenderTitleBarProps,
  RenderIconBarProps,
  RenderIconBarFuncType,
  RenderModalContentProps,
} from "./CybrModal.types";
import {
  opacityTransitionMotionVariants,
  styledWrapperMotionVariants,
} from "./motionVariants";
import {
  StyledTitleBarWrapper,
  StyledTitleWrapper,
  StyledIconBarWrapper,
  StyledWrapper,
  StyledContainer,
} from "./styles";

export const renderTitleBar: RenderTitleBarFuncType = (
  props: RenderTitleBarProps
) => {
  const brandIconprops: RenderIconBarProps = {
    iconRenderer: props.brandLogoRenderer,
    iconOnClick: props.brandLogoOnClick,
  };

  const closeIconprops: RenderIconBarProps = {
    iconRenderer: props.closeIconRenderer,
    iconOnClick: props.closeIconOnClick,
  };
  return (
    <StyledTitleBarWrapper>
      <StyledTitleWrapper>{props.title}</StyledTitleWrapper>
      {renderIconBar(closeIconprops)}
    </StyledTitleBarWrapper>
  );
};

export const renderIconBar: RenderIconBarFuncType = (
  props: RenderIconBarProps
) => {
  return (
    <StyledIconBarWrapper onClick={(e: any) => props.iconOnClick(e)}>
      {props.iconRenderer()}
    </StyledIconBarWrapper>
  );
};

export const renderModalBody = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      <PieChart />
    </div>
  );
};

export const renderModalContent = (props: RenderModalContentProps) => {
  const titleBarprops: RenderTitleBarProps = {
    brandLogoRenderer: renderDragonLogo,
    brandLogoOnClick: props.brandLogoOnClick,
    closeIconRenderer: renderXIcon,
    closeIconOnClick: props.closeIconOnClick,
    title: props.title,
  };
  return (
    <StyledWrapper exit={opacityTransitionMotionVariants.exit}>
      <StyledContainer
        key="style-container"
        initial={styledWrapperMotionVariants.hidden}
        animate={styledWrapperMotionVariants.visible}
        exit={styledWrapperMotionVariants.exit}
      >
        {renderTitleBar(titleBarprops)}
        {renderModalBody()}
      </StyledContainer>
    </StyledWrapper>
  );
};
