import React from "react";
import { CellProps } from "./types";
import { StyledCellWrapper, StyledInputWrapper } from "./styles";
import TextCellRenderer from "./CellRenderers/textCellRenderer";
import {
  mergeMotionVariants,
  addTransitionToMotionVariants,
} from "../../assets/motionVariants/helpers";
import {
  getScalingTransition,
  getOpacityTransitionMotionVariants,
  getDirectionTransitionMotionVariants,
} from "../../assets/motionVariants/motionVariants";

export default function Cell(props: CellProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [textValue, setTextValue] = React.useState(props.value);

  let mergedMotionVariants = mergeMotionVariants(
    getScalingTransition(),
    getOpacityTransitionMotionVariants()
  );

  const motionVariants = addTransitionToMotionVariants(
    mergedMotionVariants,
    0.2
  );

  const conditionallyRenderBody = () => {
    switch (props.cellRendererType) {
      case "text":
        return <TextCellRenderer value={textValue} />;
    }
  };

  const handleCellDoubleClick = (e: any) => {
    setIsEditing(!isEditing);
  };

  const handleEditInputChange = (e: any) => {
    setTextValue(e.target.value);
  };
  return isEditing ? (
    <StyledCellWrapper {...props}>
      <StyledInputWrapper
        {...props}
        value={textValue}
        onChange={(e: any) => handleEditInputChange(e)}
        onBlur={(e: any) => handleCellDoubleClick(e)}
      ></StyledInputWrapper>
    </StyledCellWrapper>
  ) : (
    <StyledCellWrapper
      onClick={(e: any) => handleCellDoubleClick(e)}
      initial="hidden"
      animate="visible"
      variants={motionVariants}
      {...props}
    >
      {conditionallyRenderBody()}
    </StyledCellWrapper>
  );
}
