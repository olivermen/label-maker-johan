import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import stylesheets
import "./404.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";

import img1 from "../../assets/main/about-1.png";
import useStore from "../../useStore";

import { Helmet } from "react-helmet";

const Error404 = () => {
  const { T, update } = useStore();
  return (
    <>
      <Helmet>
      <title>
          {T("title.404")}
        </title>
        <meta name="title" content={T("title.404")} />

        <meta
          name="keywords"
          content={T("keyword.common")}
        />
      </Helmet>
      <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl">
            <TopMenuBar />
            <div className="error">
              <h1>404</h1>
              <h2>{T("error.404")}</h2>
            </div>
          </Container>
        </React.Fragment>
      </div>
    </>
  );
};

export default Error404;
