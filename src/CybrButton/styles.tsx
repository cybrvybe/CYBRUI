import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { colors } from "../assets/colors/colors";
import { CybrButtonProps } from "./types";

const borderAnimation = (props: CybrButtonProps) => keyframes`
 0% { border-width: 0.05rem; box-shadow: 0px 0px 0px
    ${props.color ? props.color : colors.white.main(0.9)};}
 100% { border-width: 0.2rem; box-shadow: 0px 0px 5px
    ${props.color ? props.color : colors.white.main(0.9)};}
 
`;
export const StyledCybrButton = styled(motion.button)<CybrButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.isFullWidth ? "100%" : "auto")};
  background-color: ${colors.black.darkest(0.3)};
  border-style: ${(props) => (props.isGhost ? "none" : "solid")};
  border-radius: ${(props) => (props.isRounded ? "200px" : "0px")};
  border-color: ${(props) =>
    props.color ? props.color : colors.white.main(0.2)};
  border-width: 0.05rem;
  color: ${(props) => (props.color ? props.color : colors.white.main(0.7))};
  padding: 0rem 2rem;
  &:hover {
    background-color: ${colors.black.darkest(0.5)};
    border-color: ${(props) =>
      props.color ? props.color : colors.white.main(0.9)};
    border-width: 0.2rem;
    padding: 0.15rem 2.15rem;
    color: ${(props) => (props.color ? props.color : colors.white.main(0.9))};
    transform: scale(105%);
    border-style: solid;
    box-shadow: 0px 0px 5px
      ${(props) => (props.color ? props.color : colors.white.main(0.9))};
    text-shadow: 0px 0px 20px
      ${(props) => (props.color ? props.color : colors.white.main(0.9))};
    animation-name: ${borderAnimation};
    animation-duration: 0.5s;
  }
`;
