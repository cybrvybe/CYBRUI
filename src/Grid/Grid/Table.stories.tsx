import React from "react";
import Grid from "./index";
import { colHeaders, rows } from "./fakeData";
import { motion } from "framer-motion";
import styled from "styled-components";
import CybrBody from "../../Body/index";
export default {
  title: "Table/Grid",
};
const LandingPageWrapperStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const CompactGrid = () => {
  return (
    <CybrBody backgroundImage="https://th.bing.com/th/id/R.1a45a6f5ee0d770d1cb3c71ec8233a6e?rik=7uy3b5ojQaiZ3g&pid=ImgRaw&r=0">
      <Grid colHeaders={colHeaders} rows={rows} isCompact={true} />
    </CybrBody>
  );
};

export const DefaultGrid = () => {
  return <Grid colHeaders={colHeaders} rows={rows} isCompact={false} />;
};
