import React, { Profiler } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "../HomePage";
import CarListingPage from "../CarListingPage";
import ProductSinglePage from "../ProductSingle";
import CartPage from "../CartPage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import ProfilerPage from "../ProfilePage"
const AllRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/car-listing" element={<CarListingPage />} />
          <Route path="/product-single/:id" element={<ProductSinglePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilerPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AllRoute;
