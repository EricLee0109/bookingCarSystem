import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCar,
  FaCogs,
  FaTachometerAlt,
} from "react-icons/fa";
import { CARS } from "../../mock/Car";
import { CAR_MODELS } from "../../mock/CarModel";
function ListCarModel(props) {
  const { modelCar } = props

  return (
    <Row>
      {modelCar.map((model) => {
        // console.log("modelCar",modelCar);
        // let modelId=model.Id
        // console.log("modelId",modelId);
        // let carModel=CARS.filter((car)=>car.ModelId===modelId)
        // console.log("Car",carModel);
        let car = CARS.find((car) => car.ModelId === model.Id)
        return (
          <Col md={6}>
            <div className="single-offers">
              <div className="offer-image">
                <Link to="/product-single">
                  <img src={CARS.find((car) => car.ModelId === model.Id).Thumb} alt="offer 1" />
                </Link>
              </div>
              <div className="offer-text">
                <Link to="/car-booking">
                  <h3>{CARS.find((car) => car.ModelId === model.Id).Name}</h3>
                </Link>
                <h4>
                  {CARS.find((car) => car.ModelId === model.Id).Price}
                </h4>
                <ul>
                  <li>
                    <FaCar />
                    Model: {model.NameOfmodel}
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
                  <Link to={`/product-single/${car.Id}`} className="offer-btn-2">
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          </Col>)
      })}

    </Row>
  );
}

export default ListCarModel;