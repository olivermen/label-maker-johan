import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// import stylesheets
import "./review.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";
import ReviewBox from "./ReviewBox";

const Review = () => {
  return (
    <div className="review">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <TopMenuBar />
          <ReviewBox />
          {/* {status === "Sign In" ? <Login /> : ""} */}
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Review;
