import React from "react";
import { Routes, Route } from "react-router-dom";

// import pages
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import Order from "../pages/Order";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home status="default" />} />
      <Route path="/login" element={<Home status="Sign In" />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
};

export default Routers;
