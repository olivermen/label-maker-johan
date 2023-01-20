import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// import stylesheets
import "./payment.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";
import PayBox from "./PayBox";
import { Helmet } from "react-helmet";

const Order = () => {
  return (
    <>
      <div className="payment">
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl">
            <TopMenuBar />
            <PayBox />
            {/* {status === "Sign In" ? <Login /> : ""} */}
          </Container>
        </React.Fragment>
      </div>
    </>
  );
};

export default Order;
