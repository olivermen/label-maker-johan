import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// import stylesheets
import "./home.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";
import Editor from "./Editor";

// import signin modal
import Login from "../Auth";
import { BarLoader } from "react-spinners";

interface HomeProps {
  status: String;
}

const Home = () => {
  return (
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
  );
};

export default Home;
