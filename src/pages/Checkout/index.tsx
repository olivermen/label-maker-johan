import React from "react";

// import stylesheets
import "./checkout.scss";

// import sub components
import Sidebar from "../../components/TopMenuBar";
import Checkbox from "./Checkbox";

const Checkout = () => {
  return (
    <>
      <div className="bg">
        <Sidebar />
        <Checkbox />
      </div>
    </>
  );
};

export default Checkout;
