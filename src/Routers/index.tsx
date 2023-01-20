import React from "react";
import { Routes, Route } from "react-router-dom";

// import pages
import Home from "../pages/Home";
import Order from "../pages/Order";
import Shipping from "../pages/Shipping";
import Payment from "../pages/Payment";
import BrowseLabels from "../pages/BrowseLabels";
import About from "../pages/About";
import News from "../pages/News";
import ShippingInfo from "../pages/ShippingInfo";
import Review from "../pages/Review";
import Splash from "../pages/Splash";
import Confirmation from "../pages/Confirmation";
import Download from "../pages/Download";
import NotFound from "../pages/404";

const Routers = () => {
  return (
    <Routes>
      {" "}
      <Route path="/" element={<Splash />} />
      <Route path="/en/edit" element={<Home />} />
      <Route path="/en/login" element={<Home />} />
      <Route path="/en/order" element={<Order />} />
      <Route path="/en/shipping" element={<Shipping />} />
      <Route path="/en/payment" element={<Payment />} />
      <Route path="/en/browse" element={<BrowseLabels />} />
      <Route path="/en/about" element={<About />} />
      <Route path="/en/news" element={<News />} />
      <Route path="/en/shippinginfo" element={<ShippingInfo />} />
      <Route path="/en/review" element={<Review />} />
      <Route path="/en/confirmation" element={<Confirmation />} />
      <Route path="*" element={<NotFound />} />

      
      <Route path="/sv/edit" element={<Home />} />
      <Route path="/sv/login" element={<Home />} />
      <Route path="/sv/order" element={<Order />} />
      <Route path="/sv/shipping" element={<Shipping />} />
      <Route path="/sv/payment" element={<Payment />} />
      <Route path="/sv/browse" element={<BrowseLabels />} />
      <Route path="/sv/about" element={<About />} />
      <Route path="/sv/news" element={<News />} />
      <Route path="/sv/shippinginfo" element={<ShippingInfo />} />
      <Route path="/sv/review" element={<Review />} />
      <Route path="/sv/confirmation" element={<Confirmation />} />

      
      <Route path="/es/edit" element={<Home />} />
      <Route path="/es/login" element={<Home />} />
      <Route path="/es/order" element={<Order />} />
      <Route path="/es/shipping" element={<Shipping />} />
      <Route path="/es/payment" element={<Payment />} />
      <Route path="/es/browse" element={<BrowseLabels />} />
      <Route path="/es/about" element={<About />} />
      <Route path="/es/news" element={<News />} />
      <Route path="/es/shippinginfo" element={<ShippingInfo />} />
      <Route path="/es/review" element={<Review />} />
      <Route path="/es/confirmation" element={<Confirmation />} />
      <Route path="/download" element={<Download />} />
    </Routes>
  );
};

export default Routers;
