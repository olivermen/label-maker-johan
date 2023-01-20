import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// import stylesheets
import "./home.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";
import Editor from "./Editor";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      
      <div className="home">
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl">
            <TopMenuBar />
            <Editor />
            {/* {status === "Sign In" ? <Login /> : ""} */}
          </Container>
        </React.Fragment>
      </div>
    </>
  );
};

export default Home;
