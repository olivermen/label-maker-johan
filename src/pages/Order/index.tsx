import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// import stylesheets
import "./order.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";
import OrderBox from "./OrderBox";
import { Helmet } from "react-helmet";

const Order = () => {
  return (
    <>
      
      <div className="order">
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl">
            <TopMenuBar />
            <OrderBox />
            {/* {status === "Sign In" ? <Login /> : ""} */}
          </Container>
        </React.Fragment>
      </div>
    </>
  );
};

export default Order;
