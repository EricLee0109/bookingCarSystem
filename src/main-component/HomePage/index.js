import React, { Fragment } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import FindCar from "../../components/Findcar";
import About from "../../components/About";
import HotOffers from "../../components/HotOffers";
import Footer from "../../components/Footer";
const HomePage = () => {  
  return (
    <Fragment>
      <Header />
      <Hero/>
      <FindCar isHome/>
      <HotOffers />
      <About /> 
      <Footer />
    </Fragment>
  );
};
export default HomePage;
