import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// import stylesheets
import "./shipping.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";
import ShippingBox from "./ShippingBox";

const Shipping = () => {
  return (
    <div className="shipping">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <TopMenuBar />
          <ShippingBox />
          {/* {status === "Sign In" ? <Login /> : ""} */}
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Shipping;
