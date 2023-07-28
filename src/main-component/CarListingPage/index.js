import React, { Fragment } from "react";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import CarList from "../../components/CarList";
import Footer from "../../components/Footer";
const CarListingPage = () => {

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={"CarListing"}
        pagesub={"CarListing"}
      />
      <CarList />
      <Footer />
    </Fragment>
  );
};
export default CarListingPage;
