// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CybrModal from "./CybrModal";
import { CybrModalProps } from "./CybrModal.types";

describe("Test Component", () => {
  let props: CybrModalProps;

  const renderComponent = () => render(<CybrModal {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("CybrModal");

    expect(component).toHaveTextContent("harvey was here");
  });
});
