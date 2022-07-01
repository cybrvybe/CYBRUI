import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../assets/colors/colors";

const defaultTitleBarHeight = "3rem";

export const StyledTitleBarWrapper = styled(motion.div)`
  width: 100%;
  height: ${defaultTitleBarHeight};
  display: flex;
  background-color: ${colors.black.darker(1)};
`;

export const StyledTitleWrapper = styled.div({
  width: "95%",
  height: defaultTitleBarHeight,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  color: colors.white.main(1),
  paddingLeft: "0.8rem",
  fontSize: "1rem",
  letterSpacing: "0.1rem",
  fontFamily: "Phage",
});
