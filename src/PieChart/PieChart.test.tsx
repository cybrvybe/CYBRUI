// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import PieChart from "./PieChart";
import { PieChartProps } from "./PieChart.types";

describe("Test Component", () => {
  let props: PieChartProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<PieChart {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("PieChart");

    expect(component).toHaveTextContent("harvey was here");
  });
});
