import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../assets/colors/colors";

export const IconStyle = styled(motion.div)<{ color?: any }>`
  background-color: colors.transparent;
  width: 100%;
  height: 100%;
  fontsize: 0.5rem;
  color: ${(props) => (props.color ? props.color : colors.white.main(0.8))};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.color ? props.color : colors.white.main(1))};
  }
`;

export const IconMotionVariants = {
  hover: {
    scale: 2,
  },
  unHover: {
    scale: 1,
  },
};
