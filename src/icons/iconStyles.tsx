import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../assets/colors/colors";

export const IconStyle = styled(motion.div)`
  background-color: colors.transparent;
  width: 100%;
  height: 100%;
  fontsize: 0.5rem;
  color: ${colors.red.main(1)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: ${colors.red.neon(1)};
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
