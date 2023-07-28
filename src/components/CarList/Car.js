import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCar, FaCogs, FaTachometerAlt } from 'react-icons/fa';

function Car(props) {
  const { cars } = props;
  return (
    <Row>
      {cars.map((car) => (
        <Col md={6} key={car.id}>
          <div className="single-offers">
            <div className="offer-image">
              <Link to="/product-single">
                <img src={car.image} alt="offer 1" />
              </Link>
            </div>
            <div className="offer-text">
              <Link to="/car-booking">
                <h3>{car.id}</h3>
              </Link>
              <h4>{car.price}</h4>
              <ul>
                <li>
                  <FaCar />
                  {/* Model: {CAR_MODELS.find((model)=>model.Id===car.ModelId).YearOfManufacture} */}
                </li>
                <li>
                  <FaCogs />
                  automatic
                </li>
                <li>
                  <FaTachometerAlt />
                  20kmpl
                </li>
              </ul>
              <div className="offer-action">
                <Link to={`/product-single/${car.id}`} className="offer-btn-2">
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Car;
