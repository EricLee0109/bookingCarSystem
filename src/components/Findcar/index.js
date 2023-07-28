import { registerLicense } from '@syncfusion/ej2-base';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actBrandsFetchAllAsync } from '../../store/brand/actions';
import FormFindCarV2 from './FormFindCarV2';
import FormFindCar from './FormFindCar';
import './style.css';

registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1jXX9cc3dRR2BbWEM=');
const FindCar = (props) => {
  const { isHome } = props
  const dispatch = useDispatch();
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="gauto-find-area">
      <Container>
        <Row>
          <Col md={12}>
            <div className="find-box">
              <Row className="align-items-center">               
                <Col md={12}>
                  <div className="find-form">
                    {isHome && <FormFindCar />}
                    {!isHome && <FormFindCarV2 />}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FindCar;
