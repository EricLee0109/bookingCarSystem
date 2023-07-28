import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { bookService } from "../../services/bookService";
import { actBookFetchAsync, actBookGetFetchAsync } from "../../store/book/actions";

const Cart = () => {
  const currentUser = useSelector(state => state.USER.currentUser);
  const [bookList, setBookList] = useState([])
  const dispatch = useDispatch()
  const book = useSelector((state) => state.BOOKING.list)
  console.log(book);
  console.log("book", book);
  const token = localStorage.getItem('ACCESS_TOKEN');
  const onClick = (value) => {
    // e.preventDefault();
    console.log(value);
    if (window.confirm('You want to delete book car') == true) {
      dispatch(actBookFetchAsync(value, token))
    } else {
      return
    }
  };
  console.log(bookList);
  useEffect(() => {
    // bookService.getBook(token).then(res=>{
    //   setBookList(res.data)
    // })
    dispatch(actBookGetFetchAsync(token))
  }, [])

  return (
    <section className="gauto-cart-page-area section_70">
      <Container>
        <Row>
          <Col lg={8} md={7}>
            <div className="cart-table-left">
              <h3>shoppingBooking</h3>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Xe bạn đã book</th>
                      <th>Thời gian xem xe</th>
                      <th>Gía</th>
                      <th>Giới Tính</th>
                      <th>số điện thoại của nhân viên</th>
                      {/* <th>cart.total</th> */}
                      <th>booking.action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUser && book?.map((book) => {
                      let slot=''
                      if(book?.timeSlot===1){
                        slot='7h-9h'
                      }else if(book?.timeSlot===2){
                        slot='9h-11h'
                      }else if(book?.timeSlot===3){
                        slot='1h-3h'
                      }else if(book?.timeSlot===4){
                        slot='3h-5h'
                      }
                      return (
                        <tr className="shop-cart-item">
                          <td className="gauto-cart-preview">
                            <Link to={`/product-single/${book?.car?.id}`}>
                              {/* <img src={book.img} alt="cart-1" /> */}
                              <p>{book?.car?.name}</p>
                            </Link>
                          </td>
                          <td className="gauto-cart-product">
                              <p>{slot} {book.date}</p>
                          </td>
                          <td className="gauto-cart-price">
                            <p>{book?.car?.price.toLocaleString('en-US')}đ</p>
                          </td>
                          <td className="gauto-cart-gender">
                            <p>{book?.employee?.gender}</p>
                          </td>
                          {/* <td className="gauto-cart-quantity">
                        <input type="number" defaultValue={1} />
                      </td> */}
                          <td className="gauto-cart-total">
                            <p>{book?.employee?.phone}</p>
                          </td>
                          <td className="gauto-cart-close">
                            <button style={{ backgroundColor: 'red' }} onClick={() => onClick(book.id)}>
                              <FaTimes />
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              {/* <div className="cart-clear">
                <Link to="/" onClick={onClick}>
                  {t("cart.clear_cart")}
                </Link>
                <Link to="/" onClick={onClick}>
                  {t("cart.update_cart")}
                </Link>
              </div> */}
            </div>
          </Col>
          {/* <Col lg={4} md={5}> */}
            {/* <div className="order-summury-box">
              <h3></h3>
              <table>
                <tbody>
                  <tr>
                    <td></td>
                    <td>$270</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>$270</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
            {/* <div className="checkout-action">
              <Link to="/checkout" className="gauto-btn">
                
              </Link>
            </div> */}
          {/* </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
