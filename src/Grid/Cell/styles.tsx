import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../assets/colors/colors";
import { CellProps } from "./types";

const getRowColor = (rowIndex: number) => {
  if (rowIndex % 2 === 0) {
    return colors.black.dark(0.8);
  } else {
    return colors.black.light(0.8);
  }
};
export const StyledCellWrapper = styled(motion.div)<CellProps>`
  padding-top: ${(props) => (props.isCompact ? "0.1rem" : "0.5rem")};
  padding-bottom: ${(props) => (props.isCompact ? "0.1rem" : "0.5rem")};
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  font-size: 0.8rem;
  display: flex;
  text-align: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  border: solid 0.01rem ${colors.white.main(0.05)};
  color: ${colors.white.main(1)};
  width: 100%;
  overflow-x: ellipsis;
  white-space: nowrap;
  background-color: ${(props) => getRowColor(props.rowIndex)};
  :hover {
    background-color: ${colors.purple.dark(0.6)};
    border-color: ${colors.purple.neon(0.6)};
    cursor: pointer;
  }
`;

export const StyledInputWrapper = styled.input`
  color: ${colors.purple.neon(0.5)};
  background-color: ${colors.black.darker(0.8)};
`;
