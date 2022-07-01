import React from "react";
import { testModalContent } from "../CybrModal/test";

import CybrBody from "./index";
import CybrTypography from "./../CybrTypography/index";

export default {
  title: "Body",
};

export const WithText = () => {
  return (
    <CybrBody>
      <div>
        <CybrTypography
          variant="h2"
          isBold={true}
          font="Libel Suit"
          isUppercase={true}
        >
          <h2>Intelligent Automata Networks</h2>
        </CybrTypography>
        <CybrTypography variant="h5" font="Libel Suit">
          <p>{testModalContent}</p>
        </CybrTypography>
      </div>
    </CybrBody>
  );
};
