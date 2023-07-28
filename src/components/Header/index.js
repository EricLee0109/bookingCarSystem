import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaSignInAlt,
  FaUserAlt,
  FaSearch,
  FaGlobe,
} from "react-icons/fa";
import MobileMenu from "../MobileMenu";


import "flag-icon-css/css/flag-icons.min.css";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { actUserNotFetchMe } from "../../store/user/actions";


const Header = () => {
  const currentUser = useSelector(state => state.USER.currentUser);
  const book=useSelector((state)=>state.BOOKING.list)
  const dispatch = useDispatch()
  let books = JSON.parse(localStorage.getItem('Book'))
  const onClick = (e) => {
    e.preventDefault();
  };
  function handleLogout() {
    if (window.confirm('You want to logout') == true) {
      dispatch(actUserNotFetchMe(null))
    } else {
      return
    }
  }

  return (
    <div className="header" style={{display:'flex', justifyContent:'space-around',alignItems:'center',backgroundColor:'#444',color:'#F5DEB3',height:'50px'}}>
      <Link to="/" style={{color:'black'}}>
      <h3>Booking Car</h3>
      </Link>
      <div>
        <ul id="gauto_navigation" style={{display:'flex'}}>
          <li style={{marginRight:'20px'}}>
            <Link to="/" style={{fontWeight:'800'}}>Home</Link>
          </li>
          <li style={{marginRight:'20px'}}>
            <Link to="/car-listing" style={{fontWeight:'800'}}>
              CarList
            </Link>
          </li>
          <li >
            <Link to="/cart"style={{fontWeight:'800'}} >
              Booking
            </Link>
          </li>
        </ul>
      </div>
      <div style={{display:'flex', alignItems:'center'}}>
        {!currentUser && (
          <div>
            <Link to="/login" style={{marginRight:'20px'}}>
              <FaSignInAlt />
              login
            </Link>
            <Link to="/register">
              <FaUserAlt />
              register
            </Link>
          </div>
        )}
        {currentUser && (
          <div>
            <Link to="/profile" style={{marginRight:'20px'}}>
              <FaUserAlt />
              {currentUser.login}
            </Link>
            <a onClick={handleLogout} style={{cursor:'pointer'}}>
              <FaSignInAlt />
              Logout
            </a>
          </div>
        )}
        {currentUser && <div>
          <div >
            <MobileMenu />
            <div className="header-cart-box">
              <div className="login dropdown">
                <Link to="/cart" className="cart-icon" id="dropdownMenu1">
                  <span>{book?.length||0}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </div>
    // <Fragment>
    //   <section className="gauto-header-top-area">
    //     <Container>
    //       <Row>
    //         <Col md={6}>
    //           <div className="header-top-left">
    //             <p>
    //               Contact <FaPhoneAlt />+84 xxxxxxxx
    //             </p>
    //           </div>
    //         </Col>

    //       </Row>
    //     </Container>
    //   </section>

    //   <section className="gauto-mainmenu-area">
    //     {/* <Container>
    //       <Row>
    //         <Col lg={6}>
    //           <div className="mainmenu">
    //             <nav>
    //               <ul id="gauto_navigation">
    //                 <li>
    //                   <Link to="/">Home</Link>
    //                 </li>
    //                 <li>
    //                   <Link to="/car-listing">
    //                     Car_List
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link to="/cart">
    //                     Booking
    //                   </Link>
    //                 </li>
    //               </ul>
    //             </nav>
    //           </div>
    //         </Col>
    //         <Col lg={6} sm={12}>
    //           <div className="header-top-right">
    //             {currentUser && (
    //               <Col lg={3}>
    //                 <Link to="/profile">
    //                   <FaUserAlt />
    //                   {currentUser.login}
    //                 </Link>
    //                 <a onClick={handleLogout}>
    //                   <FaSignInAlt />
    //                   Logout
    //                 </a>
    //               </Col>
    //             )}
    //             {
    //               !currentUser && (
    //                 <Col lg={3}>
    //                   <Link to="/login">
    //                     <FaSignInAlt />
    //                     login
    //                   </Link>
    //                   <Link to="/register">
    //                     <FaUserAlt />
    //                     register
    //                   </Link>
    //                 </Col>
    //               )
    //             }
    //           </div>
    //           {currentUser && <div>
    //             <div className="main-search-right">
    //               <MobileMenu />
    //               <div className="header-cart-box">
    //                 <div className="login dropdown">
    //                   <Link to="/cart" className="cart-icon" id="dropdownMenu1">
    //                     <span>{books?.length}</span>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>}
    //         </Col>
    //       </Row>
    //     </Container> */}
    //     <div className="row">
    //       <div className="mainmenu">
    //         <nav>
    //           <ul id="gauto_navigation">
    //             <li>
    //               <Link to="/">Home</Link>
    //             </li>
    //             <li>
    //               <Link to="/car-listing">
    //                 Car_List
    //               </Link>
    //             </li>
    //             <li>
    //               <Link to="/cart">
    //                 Booking
    //               </Link>
    //             </li>
    //           </ul>
    //         </nav>
    //       </div>
    //       <div className="header-top-right">
    //         {currentUser && (
    //           <Col lg={3}>
    //             <Link to="/profile">
    //               <FaUserAlt />
    //               {currentUser.login}
    //             </Link>
    //             <a onClick={handleLogout}>
    //               <FaSignInAlt />
    //               Logout
    //             </a>
    //           </Col>
    //         )}
    //         {
    //           !currentUser && (
    //             <Col lg={3}>
    //               <Link to="/login">
    //                 <FaSignInAlt />
    //                 login
    //               </Link>
    //               <Link to="/register">
    //                 <FaUserAlt />
    //                 register
    //               </Link>
    //             </Col>
    //           )
    //         }
    //       </div>
    //       {currentUser && <div>
    //         <div className="main-search-right">
    //           <MobileMenu />
    //           <div className="header-cart-box">
    //             <div className="login dropdown">
    //               <Link to="/cart" className="cart-icon" id="dropdownMenu1">
    //                 <span>{books?.length}</span>
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       </div>}
    //     </div>
    //   </section>
    // </Fragment>
  );
};

export default Header;
