import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import stylesheets
import "./about.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";

import img1 from "../../assets/main/about-1.png";
import img2 from "../../assets/main/about-2.png";

const About = () => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <TopMenuBar />
          <div className="about">
            <h1>About our labels</h1>
            <Row style={{ width: "100%", marginBottom: "50px" }}>
              <Col
                className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12"
                style={{ height: "auto" }}
              >
                <Row>
                  <span className="h2">
                    Cut-to-shape, waterproof labels printed just for you
                  </span>
                </Row>
                <Row>
                  <span className="h3">
                    We don’t muck around when it comes to quality at the Beer
                    Labelizer. We print your labels on a HP Latex commercial
                    printer which produces very high quality labels. We then use
                    an HP large format cutter to cut your labels to shape with a
                    precission drag knife plotter. Your labels will look just as
                    good as the labels on beer at the supermarket. They’ll be
                    waterproof as well, so no need to worry when throwing your
                    home brew into the cooler. We post our labels anywhere in
                    the world via international air mail. It normally takes up
                    to 4 business days for your labels to arrive if you are in
                    the USA, up to 10 days for elsewhere. Our prices include
                    shipping up front, we don't sting you with unexpected
                    postage fees. Pricing is based on qty, the details are on
                    our pricing page. To order labels, just click on the "Buy
                    Stickers" button after you design your label.
                  </span>
                </Row>
              </Col>
              <Col cclassName="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                <Row>
                  <img
                    src={img1}
                    width="250px"
                    height="350px"
                    alt="about1"
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

export default About;
