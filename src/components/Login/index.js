import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaKey, FaLock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { userService } from '../../services/userService';
import { actUserFetchMe, actUserLogin } from '../../store/user/actions';
import { actBookGetFetchAsync } from '../../store/book/actions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    userService.login(formData).then(res => {
      console.log("res.data",res.data);
      const token = res.data.id_token;
      userService.fetchMe(token).then(resFetchMe => {
        console.log("resFetchMe",resFetchMe.data);
        dispatch(actUserFetchMe(resFetchMe.data, token));
        dispatch(actBookGetFetchAsync(token))
        navigate('/');
      });
    }).catch(err => alert('Login or password failed'))
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
                <h3>{'sign In'}</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="account-form-group">
                  <input type="text" placeholder={'login(username)'} name="username" onChange={handleChangeValue} />
                  <FaUser />
                </div>
                <div className="account-form-group">
                  <input type="password" placeholder={'password'} name="password" onChange={handleChangeValue} />
                  <FaLock />
                </div>
                {/* <div className="remember-row">
                  <p className="lost-pass">
                    <Link to="/" onClick={onClick}>
                      Forgot Password?
                    </Link>
                  </p>
                  <p className="checkbox remember">
                    <input className="checkbox-spin" type="checkbox" id="Freelance" />
                    <label htmlFor="Freelance">
                      <span />
                      Keep Me Signed In
                    </label>
                  </p>
                </div> */}
                <p>
                  <button type="submit" className="gauto-theme-btn">
                    LOGIN NOW!
                  </button>
                </p>
              </form>
              <div className="login-sign-up">
                <Link to="/register">Do You Need An Account?</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
