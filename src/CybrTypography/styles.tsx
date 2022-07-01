import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../assets/colors/colors";
import { CybrTypographyProps, TypographyVariantType } from "./types";

const getFontSize = (variant: TypographyVariantType) => {
  switch (variant) {
    case "h1":
      return "3rem";
    case "h2":
      return "2.5rem";
    case "h3":
      return "2rem";
    case "h4":
      return "1.5rem";
    case "h5":
      return "1.25rem";
    case "h6":
      return "1rem";
    case "p":
      return "0.8rem";
    case "span":
      return "0.8rem";
  }
};
export const StyledTypographyWrapper = styled(motion.div)<CybrTypographyProps>`
  font-size: ${(props) => getFontSize(props.variant)};
  font-family: ${(props) => props.font ?? "Phage"};
  font-weight: ${(props) => (props.isBold ? "900" : "100")};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "0.1rem"};
  line-height: 1.8rem;
  color: ${(props) => props.color ?? colors.white.main(0.9)};
  text-transform: ${(props) => (props.isUppercase ? "uppercase" : "none")};
`;
