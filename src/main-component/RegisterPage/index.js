import React, { Fragment } from "react";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Register from "../../components/Register";
import Footer from "../../components/Footer";

const RegisterPage = () => {

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle="Register Page"
        pagesub="Register"
      />
      <Register />
      <Footer />
    </Fragment>
  );
};
export default RegisterPage;
