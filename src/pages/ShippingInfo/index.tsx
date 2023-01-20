import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import stylesheets
import "./shippinginfo.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";
import useStore from "../../useStore";

import img1 from "../../assets/main/shipping.png";
import { Helmet } from "react-helmet";

const ShippingInfo = () => {
  const { T } = useStore();
  return (
    <>
      <Helmet>
        
      <title>
          {T("title.shippinginfo")}
        </title>
        <meta name="title" content={T("title.shippinginfo")} />
        <meta
          name="description"
          content={T("description.shippinginfo")}
        />
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
            <div className="shippinginfo">
              <h1>{T("shippinginfo.header")}</h1>
              <Row className="shipping-row">
                <Col className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <Row>
                    <h2>{T("shippinginfo.quiz1")} </h2>
                  </Row>
                  <Row>
                    <h3>{T("shippinginfo.answer1")}</h3>
                  </Row>
                  <Row>
                    <h2>{T("shippinginfo.quiz2")}</h2>
                  </Row>
                  <Row>
                    <h3>{T("shippinginfo.answer2")}</h3>
                  </Row>
                  <Row>
                    <h2>{T("shippinginfo.quiz3")}</h2>
                  </Row>
                  <Row>
                    <h3>{T("shippinginfo.answer3")}</h3>
                  </Row>
                </Col>
                <Col className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <Row>
                    <img
                      src={img1}
                      width="300px"
                      height="500px"
                      alt="shipping lables"
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
    </>
  );
};

export default ShippingInfo;
