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
  background-color: ${colors.black.darkest(0.5)};
  font-family: Bebas Neue;
`;
export const StyledContainer = styled(motion.div)`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${colors.black.dark(1)};
`;

export const StyledTitleBarWrapper = styled.div({
  width: "100%",
  height: defaultTitleBarHeight,
  display: "flex",
  backgroundColor: colors.black.darker(1),
});

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
});

export const StyledIconBarWrapper = styled.div({
  width: "5%",
  height: defaultTitleBarHeight,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
});
