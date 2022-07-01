import { AnimatePresence } from "framer-motion";
import React from "react";
import { colors } from "../assets/colors/colors";
import CybrBody from "../Body";
import CybrButton from "./index";
import BriefcaseIcon from "./../icons/briefcase";
import ShoppingCartIcon from "./../icons/shoppingCart";

export default {
  title: "CybrButton",
};

export const WithText = (
  color?: any,
  propText?: string,
  children?: React.ReactNode,
  isRounded?: boolean
) => {
  const [text, setText] = React.useState("Click Me");
  const [text2, setText2] = React.useState("Click Me 2");
  const [isOgButton, setIsOgButton] = React.useState(true);

  const props = {
    ...(color && {
      color: color,
    }),
    text: propText,
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <CybrBody>
        {isOgButton && (
          <CybrButton {...props} isRounded={isRounded == true ? true : false}>
            {children && children}
          </CybrButton>
        )}
      </CybrBody>
    </AnimatePresence>
  );
};
export const GreenButton = () => {
  return WithText(colors.green.neon(0.5), "Submit");
};

export const RedButton = () => {
  return WithText(colors.red.neon(0.5), "Cancel");
};

export const PurpleButton = () => {
  return WithText(colors.purple.neon(0.5), "More Details");
};

export const WhiteButton = () => {
  return WithText(colors.white.main(0.5), "Sign Up");
};

export const ButtonWithLogo = () => {
  const color = colors.white.main(0.5);
  return WithText(
    color,
    "Operations",
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 0rem",
      }}
    >
      <BriefcaseIcon color={color} />
      <div
        style={{
          paddingLeft: "1rem",
        }}
      >
        Operations
      </div>
    </div>
  );
};

export const RoundButton = () => {
  return WithText(colors.white.main(0.5), "Sign Up", undefined, true);
};

export const RoundButtonWithLogo = () => {
  const color = colors.green.neon(0.5);
  return WithText(
    color,
    "Add To Cart",
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 0rem",
      }}
    >
      <ShoppingCartIcon color={color} />
      <div
        style={{
          paddingLeft: "1rem",
        }}
      >
        Checkout
      </div>
    </div>,
    true
  );
};
