import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../assets/colors/colors";

export const StyledModalPromptBarWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: ${colors.black.darkest(0.8)};
  color: ${colors.white.main(1)};
`;
