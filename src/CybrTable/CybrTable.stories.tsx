import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TableType } from "./types";
import CybrTable from "./index";
import CybrBody from "../Body";
import { colors } from "../assets/colors/colors";

// define sane defaults that can be spread as a base for every story
const defaultArgs: TableType = {
  isDark: true,
  pagination: true,
  perPage: 100,
  rowData: [],
  columnDefs: [],
  filter: true,
  resizable: true,
  sortable: true,
};

export default {
  title: "Ag-Grid/CybrTable",
  component: CybrTable,
  argTypes: {},
} as ComponentMeta<typeof CybrTable>;

const Template: ComponentStory<typeof CybrTable> = (args) => (
  <CybrBody>
    <CybrTable {...args} />
  </CybrBody>
);
export const Primary = Template.bind({});

Primary.args = {
  ...defaultArgs,
  isDark: true,
  rowData: [
    { make: "Toyota", model: "Celica", price: 35000, type: "sedan" },
    { make: "Nissan", model: "KDH", price: 32000, type: "van" },
    { make: "KIA", model: "Sorento", price: 72000, type: "jeep" },
  ],
  columnDefs: [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "type" },
  ],
  sortable: true,
  resizable: true,
  filter: true,
};

const carPrice = (value: number) => {
  return {
    color: value > 50000 ? "#FF5733" : "#00E676",
    backgroundColor: colors.black.darkest(0.5),
  };
};
const cellStyle = { backgroundColor: colors.black.darkest(0.5) };

export const CustomCellRender = Template.bind({});
CustomCellRender.args = {
  ...defaultArgs,
  isDark: true,
  rowData: [
    { make: "Toyota", model: "Celica", price: 35000, type: "sedan" },
    { make: "Nissan", model: "KDH", price: 32000, type: "van" },
    { make: "KIA", model: "Sorento", price: 72000, type: "jeep" },
  ],
  columnDefs: [
    { field: "make", cellStyle: cellStyle },
    { field: "model", cellStyle: cellStyle },
    {
      field: "price",
      cellStyle: (params: any) => {
        return carPrice(params.value);
      },
      animate: true,
    },
  ],
};

export const NoData = Template.bind({});
NoData.args = {
  ...defaultArgs,
};

// This function will generate lots of data, so that you can see how the CybrTable behaves when populated with many rows
function getData() {
  let data = [];
  for (let x = 0; x < 150; x++) {
    data.push({
      make: ["Toyota", "Nissan", "Kia"][Math.floor(Math.random() * 3)],
      model: ["Celica", "KDH", "Sorento"][Math.floor(Math.random() * 3)],
      price: Math.floor(Math.random() * 100000) + 25000,
      type: ["sedan", "van", "jeep"][Math.floor(Math.random() * 3)],
    });
  }
  return data;
}

export const LotsOfData = Template.bind({});
LotsOfData.args = {
  ...defaultArgs,
  columnDefs: [
    { field: "make", cellStyle: cellStyle },
    { field: "model", cellStyle: cellStyle },
    { field: "price", cellStyle: cellStyle },
    { field: "type", cellStyle: cellStyle },
  ],
  rowData: getData(),
};
