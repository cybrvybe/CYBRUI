// Generated with util/create-component.js
import React, { useEffect, useState } from "react";

import {
  CybrModalProps,
  RenderIconBarFuncType,
  RenderIconBarProps,
  RenderModalContentProps,
  RenderTitleBarFuncType,
  RenderTitleBarProps,
} from "./CybrModal.types";

import "./CybrModal.scss";
import { Modal } from "@material-ui/core";
import styled from "styled-components";
import { GlobalFonts } from "../globalStyle";
import { OnClickType } from "../types/types";
import { ReactCompnent as DragonLogo } from "../../public/icons/dragonSilverLogo.svg";
import { renderDragonLogo } from "../icons/dragonAu7oma7a";
import { renderXIcon } from "../icons/x";
import PieChart from "../PieChart/PieChart";
import { AnimatePresence, motion } from "framer-motion";
import { renderModalContent } from "./renderers";
export default function CybrModal(props: CybrModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(props.open);
  const [closed, setClosed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isModalOpen);
  }, [isModalOpen]);

  const handleClose = (e: any) => {
    setIsModalOpen(false);
    setClosed(true);
    props.onClose();
  };

  const dragonLogoOnClick = (e: any) => {
    console.log("clicked dragon logo");
  };

  const modalContentProps: RenderModalContentProps = {
    brandLogoOnClick: dragonLogoOnClick,
    closeIconOnClick: handleClose,
    title: props.title,
    closed: closed,
    setClosed: setClosed,
  };

  return (
    <div className="foo-bar" data-testid="CybrModal">
      <GlobalFonts />
      {!open && (
        <div onClick={(e: any) => setIsModalOpen(true)}>Open Modal</div>
      )}
      <AnimatePresence>
        {open && (
          <Modal open={open}>{renderModalContent(modalContentProps)}</Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
