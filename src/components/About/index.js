import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import Img1 from "../../img/carId.jpg";
import "./style.css";
const About = () => {
  return (
    <section className="gauto-about-area section_70">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="about-left">
              <h4>about Us</h4>
              <h2>welcome MyShowroom</h2>
              <p style={{color:"black", fontSize:"18px"}}>My showroom specializes in selling used cars on specialized cars in the market</p>
              <div className="about-list">
                <ul>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    trusted_name
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    deal_brands
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    larger_stocks
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    worldwide_location
                  </li>
                </ul>
              </div>
              {/* <div className="about-signature">
                <div className="signature-left">
                  <img src={signature} alt="signature" />
                </div>
                <div className="signature-right">
                  <h3>Robertho Garcia</h3>
                  <p>president</p>
                </div>
              </div> */}
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-right">
              <img src={Img1} alt="car" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
