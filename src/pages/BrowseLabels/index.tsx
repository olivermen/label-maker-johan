import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// import stylesheets
import "./browselabels.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";
import Labels from "./Labels";

const BrowseLabels = () => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <TopMenuBar />
          <Labels />
        </Container>
      </React.Fragment>
    </div>
  );
};

export default BrowseLabels;
