import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// import stylesheets
import "./splash.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";

// import signin modal
import Login from "../Auth";
import {
  BarLoader,
  CircleLoader,
  ClimbingBoxLoader,
  DotLoader,
  PropagateLoader,
  PuffLoader,
  RingLoader,
  RiseLoader,
  ScaleLoader,
} from "react-spinners";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      navigate("/edit");
    }, 5000);
  }, []);
  return (
    <div className="splash">
      <React.Fragment>
        <ScaleLoader color="white" width={15} height={50} margin={5} />
      </React.Fragment>
    </div>
  );
};

export default Splash;
