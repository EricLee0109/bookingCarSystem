import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaKey, FaLock, FaUser, FaRegEnvelope, FaPhone } from "react-icons/fa";

import "./style.css";
import { useState } from "react";
import { userService } from "../../services/userService";

const Register = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    login: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  })

  console.log('formData', formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const key in formData) {
      if(formData[key]===''){
        alert("Please do not leave it blank");
        break;
      }
    }
    if(formData.password.length<4){
      alert('password is greater than or equal to 4')      
    }
    userService.register(formData).then(res => {     
      navigate("/login")
    }).catch(err => { 
      if(err.response.data.title==="Login name already used!")
      alert(err.response.data.title+"!!!!!" +" Please change username")
      if(err.response.data.title==="Email is already in use!")
      alert(err.response.data.title+"!!!!!"+"Please change email")
      // else{
      // alert(err.response.data.errorKey+"!!!!!" +" Please change email") 
      // }
    })
  };

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
                <h3>Sign Up</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder="login(username)"
                    name="login" onChange={handleChangeValue}
                  />
                  <FaUser />
                </div>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder="FirstName"
                    name="firstName" onChange={handleChangeValue}
                  />
                  <FaUser />
                </div>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder="LastName"
                    name="lastName" onChange={handleChangeValue}
                  />
                  <FaUser />
                </div>
                <div className="account-form-group">
                  <input
                    type="email"
                    placeholder="email"
                    name="email" onChange={handleChangeValue}
                  />
                  <FaRegEnvelope />
                </div>
                <div className="account-form-group">
                  <input
                    type="password"
                    placeholder="password"
                    name="password" onChange={handleChangeValue}
                  />
                  <FaLock />
                </div>
                <div className="account-form-group">
                  <input
                    type="tel"
                    placeholder="phone"
                    name="phone" onChange={handleChangeValue}
                  />
                  <FaPhone/>
                </div>
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
                    Sign up
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

export default Register;
