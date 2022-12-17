import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import stylesheets
import "./shippinginfo.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";

import img1 from "../../assets/main/shipping.png";

const ShippingInfo = () => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <TopMenuBar />
          <div className="shippinginfo">
            <h1>Shipping</h1>
            <Row style={{ width: "100%", marginTop: "50px" }}>
              <Col
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                style={{ height: "auto" }}
              >
                <Row>
                  <h2>What do you ship to? </h2>
                </Row>
                <Row>
                  <h3>We ship labels to any address worldwide!</h3>
                </Row>
                <Row>
                  <h2>How much is shipping? </h2>
                </Row>
                <Row>
                  <h3>Shipping is included in the pricing of our labels.</h3>
                </Row>
                <Row>
                  <h2>
                    What shipping method(s) do you use? Can I get a tracking
                    number?
                  </h2>
                </Row>
                <Row>
                  <h3>
                    We ship using the US Postal Service. Unfortunately this
                    shipping method does NOT include tracking.
                  </h3>
                </Row>
              </Col>
              <Col className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <Row>
                  <img
                    src={img1}
                    width="300px"
                    height="500px"
                    alt="about1"
                    className="shipping-image"
                  ></img>
                </Row>
                <Row></Row>
              </Col>
            </Row>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default ShippingInfo;
