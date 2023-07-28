import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaKey, FaLock, FaUser, FaRegEnvelope, FaPhone,FaUserEdit } from "react-icons/fa";

import "./style.css";
import { useState } from "react";
import { userService } from "../../services/userService";
import { useSelector } from "react-redux";

const Profile = () => {
  const [formData, setFormData] = useState({
    login: '',
    firstName: '',
    lastName: '',
    email: '',
  })
  const navigate=useNavigate()

  console.log('formData', formData);
  const token = localStorage.getItem('ACCESS_TOKEN');

  const currentUser=useSelector((state)=>state.USER.currentUser)
  const handleSubmit = (e) => {
    e.preventDefault();
    // userService.change(formData,token);
    navigate('/')
  };
  console.log(currentUser);

  function handleChangeValue(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <section className="gauto-login-area section_70">
      <Container>
        <Row>
          <Col md={12}>
            <div className="login-box">
              <div className="login-page-heading">
                <FaKey />
                <h3>Profile</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder={"Login: "+currentUser?.login}
                    name="login" onChange={handleChangeValue}
                  />
                  <FaUserEdit />
                </div>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder={"FirstName: "+currentUser?.firstName}
                    name="firstName" onChange={handleChangeValue}
                  />
                  <FaUserEdit />
                </div>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder={"LastName: "+currentUser?.lastName}
                    name="lastName" onChange={handleChangeValue}
                  />
                  <FaUserEdit />
                </div>
                <div className="account-form-group">
                  <input
                    type="email"
                    placeholder={currentUser?.email}
                    name="email" onChange={handleChangeValue}
                  />
                  <FaRegEnvelope />
                </div>
                {/* <div className="account-form-group">
                  <input
                    type="password"
                    placeholder={currentUser.password}
                    name="password" onChange={handleChangeValue}
                  />
                  <FaLock />
                </div> */}
                {/* <div className="account-form-group">
                  <input
                    type="tel"
                    placeholder="phone"
                    name="phone" onChange={handleChangeValue}
                  />
                  <FaPhone />
                </div> */}
                {/* <div className="remember-row">
                  <p className="checkbox remember signup">
                    <input
                      className="checkbox-spin"
                      type="checkbox"
                      id="Freelance" 
                    />
                  </p>
                </div> */}
                <p>
                  <button type="submit" className="gauto-theme-btn">
                    Change Profile
                  </button>
                </p>
              </form>
              <div className="login-sign-up">
                <Link to="/login">Sign in Now</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Profile;
