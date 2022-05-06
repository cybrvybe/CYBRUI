// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CurrencyChangeCellRenderer from "./CurrencyChangeCellRenderer";
import { CurrencyChangeCellRendererProps } from "./CurrencyChangeCellRenderer.types";

describe("Test Component", () => {
  let props: CurrencyChangeCellRendererProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<CurrencyChangeCellRenderer {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("CurrencyChangeCellRenderer");

    expect(component).toHaveTextContent("harvey was here");
  });
});
