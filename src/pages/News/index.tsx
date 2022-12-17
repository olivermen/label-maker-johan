import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import stylesheets
import "./news.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";

const News = () => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <TopMenuBar />
          <div className="news">
            <h1>News</h1>
            <Row style={{ width: "100%", marginBottom: "50px" }}>
              <Col className="col-6" style={{ height: "auto" }}>
                <div
                  style={{
                    backgroundColor: "#55555530",
                    width: "100%",
                    height: "100%",
                  }}
                ></div>
              </Col>
              <Col className="col-6">
                <Row>
                  <h2>News1</h2>
                </Row>
                <Row>
                  <h3>
                    10 years ago, Andy brewed a beer that was simply just better
                    than the plain old bottle it was put in. And so Andy, being
                    a very resourceful sort of fellow, fired up his Adobe Flash
                    (!!) software and busted out a couple of label designs to
                    print out and stick on his bottles.
                  </h3>
                </Row>
              </Col>
            </Row>
            <Row style={{ width: "100%", marginBottom: "50px" }}>
              <Col className="col-6">
                <Row>
                  <h2>News2</h2>
                </Row>
                <Row>
                  <h3>
                    10 years ago, Andy brewed a beer that was simply just better
                    than the plain old bottle it was put in. And so Andy, being
                    a very resourceful sort of fellow, fired up his Adobe Flash
                    (!!) software and busted out a couple of label designs to
                    print out and stick on his bottles.
                  </h3>
                </Row>
              </Col>
              <Col className="col-6" style={{ height: "auto" }}>
                <div
                  style={{
                    backgroundColor: "#55555530",
                    width: "100%",
                    height: "100%",
                  }}
                ></div>
              </Col>
            </Row>
            <Row style={{ width: "100%", marginBottom: "50px" }}>
              <Col className="col-6" style={{ height: "auto" }}>
                <div
                  style={{
                    backgroundColor: "#55555530",
                    width: "100%",
                    height: "100%",
                  }}
                ></div>
              </Col>
              <Col className="col-6">
                <Row>
                  <h2>News3</h2>
                </Row>
                <Row>
                  <h3>
                    10 years ago, Andy brewed a beer that was simply just better
                    than the plain old bottle it was put in. And so Andy, being
                    a very resourceful sort of fellow, fired up his Adobe Flash
                    (!!) software and busted out a couple of label designs to
                    print out and stick on his bottles.
                  </h3>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default News;
