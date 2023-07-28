import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaHeart,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaSkype,
  FaPaperPlane,
} from "react-icons/fa";

import logo from "../../img/logo.png";
import img1 from "../../img/post-thumb-3.jpg";
import img2 from "../../img/post-thumb-2.jpg";
import img3 from "../../img/post-thumb-1.jpg";

import "./style.css";

const Footer = () => {
  const { t } = useTranslation();

  const onClick = (e) => {
    e.preventDefault();
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="gauto-footer-area">
      <div className="footer-top-area" style={{padding:'30px 200px'}}>
        <>
          <div style={{ display: 'flex',justifyContent:'space-between' }}>
            <>
              <div className="single-footer" style={{width:"500px"}}>
                {/* <div className="footer-logo">
                  <Link to="/">
                    <img src={logo} alt="footer-logo" />
                  </Link>
                </div> */}
                <p>
                  sed do eiusmod tempor incididunt ut labore et dolore magna as
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco.
                </p>
              </div>
            </>
            < >
              {/* <h3>Footer</h3> */}
              <div>
                <p>
                  125 Big fella St. Road, <span>New York, Hi 5654775</span>
                </p>
                <ul>
                  <li>{t("footer.phone")}: 326487652 </li>
                  <li>{t("footer.email")}: example@mail.com</li>
                  <li>{t("footer.office_time")}: 9AM- 4PM</li>
                </ul>
              </div>
            </>
          </div>
        </>
      </div>
      <div className="footer-bottom-area">
        <Container>
          <Row>
            <Col md={6}>
              <div className="copyright">
                {/* <p>
                  Design With <FaHeart /> from{" "}
                  <Link to="/" onClick={onClick}>
                    Team6
                  </Link>
                </p> */}
              </div>
            </Col>
            <Col md={6}>
              <div className="footer-social">
                <ul>
                  <li>
                    <Link to="/" onClick={onClick}>
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      <FaSkype />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
