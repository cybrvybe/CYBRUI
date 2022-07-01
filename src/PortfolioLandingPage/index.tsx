import React from "react";
import { colors } from "../assets/colors/colors";
import CybrBody from "../Body";
import CybrButton from "../CybrButton";
import CybrTypography from "../CybrTypography";
import { PortfolioLandingPageProps } from "./types";
import {
  LandingPageWrapperStyle,
  NameDiv,
  NavBarLandingPageStyle,
} from "./styles";

export default function PortfolioLandingPage(props: PortfolioLandingPageProps) {
  return (
    <CybrBody backgroundImage="https://th.bing.com/th/id/R.1a45a6f5ee0d770d1cb3c71ec8233a6e?rik=7uy3b5ojQaiZ3g&pid=ImgRaw&r=0">
      <LandingPageWrapperStyle>
        <NavBarLandingPageStyle>
          <CybrButton text="Home" />
          <CybrButton text="Projects" />
          <CybrButton text="Profile" />
          <CybrButton text="Blog" />
        </NavBarLandingPageStyle>
        <NameDiv>
          <CybrTypography color={colors.green.neon(0.5)} variant="h4">
            {props.name ?? "John Doe"}
          </CybrTypography>
        </NameDiv>
        <div>
          <CybrTypography isUppercase isBold variant="span">
            <div style={{ display: "flex", flexDirection: "row" }}>
              {props.technicalInterests.map((interest: string) => {
                return <div style={{ padding: "0rem 1rem" }}>{interest}</div>;
              })}
            </div>
          </CybrTypography>
        </div>
        <div>
          <CybrTypography variant="h6" font="Libel Suit">
            <div style={{ padding: "1rem", lineHeight: "3rem" }}>
              {props.tagline ?? "John Doe"}
            </div>
          </CybrTypography>
        </div>
      </LandingPageWrapperStyle>
    </CybrBody>
  );
}
