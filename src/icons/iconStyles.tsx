import { motion } from "framer-motion";
import styled from "styled-components";

export const IconStyle = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
  fontsize: 0.5rem;
  color: rgba(180, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: rgba(255, 0, 0, 1);
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
