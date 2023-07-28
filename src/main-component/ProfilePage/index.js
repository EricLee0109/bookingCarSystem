import React, { Fragment } from "react";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Profile from "../../components/Profile";
import Footer from "../../components/Footer";

const ProfilePage = () => {

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle="Profile page"
        pagesub="Profile"
      />
      <Profile />
      <Footer />
    </Fragment>
  );
};
export default ProfilePage;
