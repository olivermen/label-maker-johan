import React from "react";

// import stylesheets
import "./home.scss";

// import sub components
import Appbar from "../../components/Appbar";
import Editor from "./Editor";

// import signin modal
import Login from "../Auth";

interface HomeProps {
  status: String;
}

const Home = ({ status }: HomeProps) => {
  return (
    <>
      <div className="back">
        <Appbar />
        <Editor />
        {/* {status === "Sign In" ? <Login /> : ""} */}
      </div>
    </>
  );
};

export default Home;
