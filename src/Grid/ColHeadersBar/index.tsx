import React, { useState } from "react";
import { colors } from "../../assets/colors/colors";
import {
  StyledColHeaderLabelContainer,
  StyledColHeadersContainer,
} from "./styles";
import { ColHeadersBarProps, ColHeaderType, ColSortStateType } from "./types";

export default function ColHeadersBar(props: ColHeadersBarProps) {
  const [sortState, setSortState] = useState<ColSortStateType>();
  const [colHeadersState, setColHeadersState] = useState<ColHeaderType[]>(
    props.colHeaders
  );

  const handleColHeaderClick = (
    e: any,
    colHeader: ColHeaderType,
    index: number
  ) => {
    e.preventDefault();
    if (colHeader.sortable) {
      setSortState({
        colKey: colHeader.key,
        direction: !sortState?.direction,
      });
    }
  };

  const updateColHeaderLabel = (inputText: string, index: number) => {
    const newColHeaders = [...colHeadersState];
    newColHeaders[index].label = inputText;
    setColHeadersState(newColHeaders);
  };

  const updateColHeadersIndices = () => {
    const newColHeaders = [...colHeadersState];
    newColHeaders.forEach((colHeader, index) => {
      colHeader.colIndex = index;
    });
    setColHeadersState(newColHeaders);
  };

  const addNewColHeader = () => {
    const newColHeaders = [...colHeadersState];
    newColHeaders.push({
      label: "",
      key: "",
      colIndex: colHeadersState.length + 1,
      dataType: "text",
      width: 100,
      align: "left",
      sortable: true,
    });
    setColHeadersState(newColHeaders);
  };

  const renderColHeaders = () => {
    return (
      <StyledColHeadersContainer colHeaders={props.colHeaders}>
        {props.colHeaders.map((colHeader, index) => {
          return (
            <StyledColHeaderLabelContainer
              onClick={(e: any) => handleColHeaderClick(e, colHeader, index)}
              key={index}
              colHeaders={props.colHeaders}
            >
              {colHeader.label}
            </StyledColHeaderLabelContainer>
          );
        })}
      </StyledColHeadersContainer>
    );
  };

  return <div style={{ width: "100%" }}>{renderColHeaders()}</div>;
}
