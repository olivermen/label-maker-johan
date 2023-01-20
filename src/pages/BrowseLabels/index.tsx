import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// import stylesheets
import "./browselabels.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";
import Labels from "./Labels";
import { Helmet } from "react-helmet";

const BrowseLabels = () => {
  return (
    <>

      <div className="browselabels">
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl">
            <TopMenuBar />
            <Labels />
          </Container>
        </React.Fragment>
      </div>
    </>
  );
};

export default BrowseLabels;
