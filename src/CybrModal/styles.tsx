import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../assets/colors/colors";

const defaultTitleBarHeight = "3rem";
export const StyledWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Phage;
  filter: blur(50px);
  background-color: ${colors.white.main(0.2)};
  font-weight: 900;
  letter-spacing: 0.2rem;
  z-index: 0;
`;
export const StyledContainer = styled(motion.div)`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${colors.black.dark(1)};
  position: absolute;
  z-index: 1;
  border-color: ${colors.white.main(0.1)};
  border-style: solid;
  border-width: 0.025rem;
`;

export const StyledIconBarWrapper = styled(motion.div)`
  width: 5%;
  height: ${defaultTitleBarHeight};
  display: flex;
  justifycontent: flex-end;
  alignitems: center;
  flexdirection: row;
`;

export const ModalBodyWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: LibelSuit;
  color: ${colors.white.main(1)};
  padding: 0rem 3rem;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  line-height: 1.8rem;
  max-height: 20rem;
  overflow-y: auto;
  width: 100%;
`;
