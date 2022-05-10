import React from "react";
import { IconStyle } from "../iconStyles";
import ArrowRightIcon from "./right";
import { ArrowIconProps } from "./types";
import ArrowUpIcon from "./up";

export default function ArrowIcon(props: ArrowIconProps) {
  const conditionallyRenderIconBasedOnDirection = () => {
    switch (props.direction) {
      case "right":
        return <ArrowRightIcon />;
      case "up":
        <ArrowUpIcon />;
    case "down":
    }
  };

  return <IconStyle>{conditionallyRenderIconBasedOnDirection()}</IconStyle>;
}
