// Generated with util/create-component.js
import React, { useEffect, useState } from "react";

import { CybrModalProps, RenderModalContentProps } from "./CybrModal.types";

import "./CybrModal.scss";
import { Modal } from "@material-ui/core";
import { GlobalFonts } from "../globalStyle";
import { AnimatePresence } from "framer-motion";
import { renderModalContent } from "./renderers";
import CybrBody from "../Body";
import CybrButton from "../CybrButton";
import { getScalingTransition } from "../assets/motionVariants/motionVariants";
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
    <CybrBody>
      <GlobalFonts />
      <AnimatePresence>
        {!open && (
          <CybrButton
            text="Open Modal"
            onClick={(e: any) => setIsModalOpen(true)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <Modal open={open}>{renderModalContent(modalContentProps)}</Modal>
        )}
      </AnimatePresence>
    </CybrBody>
  );
}
