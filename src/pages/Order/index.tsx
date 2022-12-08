import React from "react";

// import stylesheets
import "./order.scss";

// import sub components
import Sidebar from "../../components/Appbar";
import OrderBox from "./OrderBox";

const Order = () => {
  return (
    <>
      <div className="back">
        <Sidebar />
        <OrderBox />
      </div>
    </>
  );
};

export default Order;
