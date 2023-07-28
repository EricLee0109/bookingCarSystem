import React, { Fragment } from 'react';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import ProductDetails from '../../components/ProductDetails';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { carService } from '../../services/carService';
import { useDispatch } from 'react-redux';

const ProductSinglePage = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle='CarDetails' pagesub='Details' />
      <ProductDetails />
      <Footer />
    </Fragment>
  );
};
export default ProductSinglePage;
