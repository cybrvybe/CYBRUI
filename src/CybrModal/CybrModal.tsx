// Generated with util/create-component.js
import React, { useState } from "react";

import {
  CybrModalProps,
  RenderIconBarFuncType,
  RenderIconBarProps,
  RenderTitleBarFuncType,
  RenderTitleBarProps,
} from "./CybrModal.types";

import "./CybrModal.scss";
import { Modal } from "@material-ui/core";
import styled from "styled-components";
import { GlobalFonts } from "../globalStyle";
import { OnClickType } from "../types/types";
import { ReactCompnent as DragonLogo } from "../../public/icons/dragonSilverLogo.svg";
import { renderDragonLogo } from "../icons/renderDragonLogo";
import { renderXIcon } from "../icons/renderXIcon";
import PieChart from "../PieChart/PieChart";
export default function CybrModal(props: CybrModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(props.open);
  const defaultTitleBarHeight = "3rem";

  const StyledWrapper = styled.div({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    fontFamily: "Bebas Neue",
  });

  const StyledContainer = styled.div({
    width: "80%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "rgba(15,15,15,1)",
  });

  const StyledTitleBarWrapper = styled.div({
    width: "100%",
    height: defaultTitleBarHeight,
    display: "flex",
    backgroundColor: "rgba(5,5,5, 1)",
  });

  const StyledTitleWrapper = styled.div({
    width: "95%",
    height: defaultTitleBarHeight,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "rgba(100,100,100,1)",
    paddingLeft: "0.8rem",
    fontSize: "1rem",
    letterSpacing: "0.1rem",
  });

  const StyledIconBarWrapper = styled.div({
    width: "5%",
    height: defaultTitleBarHeight,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  });

  const handleClose = (e: any) => {
    setIsModalOpen(false);
    props.onClose();
  };

  const renderTitleBar: RenderTitleBarFuncType = (
    deps: RenderTitleBarProps
  ) => {
    const brandIconDeps: RenderIconBarProps = {
      iconRenderer: deps.brandLogoRenderer,
      iconOnClick: deps.brandLogoOnClick,
    };

    const closeIconDeps: RenderIconBarProps = {
      iconRenderer: deps.closeIconRenderer,
      iconOnClick: deps.closeIconOnClick,
    };
    return (
      <StyledTitleBarWrapper>
        <StyledTitleWrapper>{props.title}</StyledTitleWrapper>
        {renderIconBar(closeIconDeps)}
      </StyledTitleBarWrapper>
    );
  };

  const renderIconBar: RenderIconBarFuncType = (deps: RenderIconBarProps) => {
    return (
      <StyledIconBarWrapper onClick={(e: any) => deps.iconOnClick(e)}>
        {deps.iconRenderer()}
      </StyledIconBarWrapper>
    );
  };

  const renderModalBody = () => {
    return <div>{props.children}</div>;
  };

  const dragonLogoOnClick = (e: any) => {
    console.log("clicked dragon logo");
  };

  const renderModalContent = () => {
    const titleBarDeps: RenderTitleBarProps = {
      brandLogoRenderer: renderDragonLogo,
      brandLogoOnClick: dragonLogoOnClick,
      closeIconRenderer: renderXIcon,
      closeIconOnClick: handleClose,
    };
    return (
      <StyledWrapper>
        <StyledContainer>
          {renderTitleBar(titleBarDeps)}
          {renderModalBody()}
        </StyledContainer>
      </StyledWrapper>
    );
  };

  return (
    <div className="foo-bar" data-testid="CybrModal">
      <GlobalFonts />
      {!isModalOpen && (
        <div onClick={(e: any) => setIsModalOpen(true)}>Open Modal</div>
      )}
      <PieChart />
      <PieChart />
      <PieChart />
      <Modal open={isModalOpen}>{renderModalContent()}</Modal>
    </div>
  );
}
