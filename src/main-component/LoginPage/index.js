import React, { Fragment } from "react";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Login from "../../components/Login";
import Footer from "../../components/Footer";

const LoginPage = () => {

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle="Login Page"
        pagesub="Login"
      />
      <Login />
      <Footer />
    </Fragment>
  );
};
export default LoginPage;
