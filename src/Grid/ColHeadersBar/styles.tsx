import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../assets/colors/colors";
import { ColHeadersBarProps } from "./types";

export const StyledColHeaderLabelContainer = styled(
  motion.div
)<ColHeadersBarProps>`
  background-color: ${colors.black.darkest(1)};
  border: solid 0.05rem ${colors.white.main(0.25)};
  width: ${(props) => (100 / props.colHeaders.length).toString() + "%"};
`;

export const StyledColHeadersContainer = styled(motion.div)<ColHeadersBarProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  width: 100%;
`;
