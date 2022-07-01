import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../assets/colors/colors";

export const StyledBodyWrapper = styled(motion.div)<{ backgroundImage?: any }>`
  display: flex;
  position: relative;
  background: url(${(props) =>
      props.backgroundImage ??
      "https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg"})
    no-repeat center center;
  height: 100vh;
  width: 100%;
  background-size: cover;
  z-index: 0;
  overflow-y: hidden;
`;

export const StyledBodyContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 1;
  padding: 0rem 3rem;
  background-color: ${colors.black.darkest(0.9)};
  color: ${colors.white.main(1)};
  font-family: Libel Suit;
`;
