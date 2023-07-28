import React, { Fragment } from "react";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Cart from "../../components/Cart";
import Footer from "../../components/Footer";

const CartPage = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle="Shopping_Booking"
        pagesub="Booking"
      />
      <Cart />
      <Footer />
    </Fragment>
  );
};
export default CartPage;
