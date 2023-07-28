import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  DatePickerComponent,
  TimePickerComponent,
} from "@syncfusion/ej2-react-calendars";
import {
  FaFacebook,
  FaInstagram,
  FaShoppingCart,
  FaStar,
  FaStarHalf,
  FaTwitter,
} from "react-icons/fa";
import "./style.css";
import { CARS } from "../../mock/Car";
import { useDispatch, useSelector } from 'react-redux';
import { actCarsFetchSearchAsync, actCarsFetchSearchAsyncArea, actCarsFetchSearchRelatedAsync, actFetchBookingCars, actFetchCars, actFetchCarsAsync } from "../../store/car/actions";
import moment from "moment/moment";
import { bookService } from "../../services/bookService";
import Moment from 'moment';
import { actModelsFetchAllByCarAsync } from "../../store/model/actions";
const ProductDetails = () => {
  const param = useParams();
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.USER.currentUser)
  console.log("currentUser", currentUser);
  const [isImage, setIsImage] = useState(null);
  const [dateTime, setDateTime] = useState(null)
  const [day, setDay] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()))


 
  const carDetail = useSelector((state) => state.CAR.carDetail);
  // const carWithModel = useSelector((state) => state.MODEL.listAllCarWithModel)
  const carWithModel = useSelector((state) => state.CAR.listRelated)
  console.log(carWithModel);

  // const [carWithModel,setCarWithModel]=useState([])
  const token = localStorage.getItem('ACCESS_TOKEN')
  const [form, setForm] = useState({
    carId: +param.id,
    date: null,
    slot: null
  })
  const modelsCars = useSelector((state) => state.MODEL.listAllModelsCars)
  
  const navigate = useNavigate()
  // const book = {
  //   img: carDetail?.img,
  //   price: carDetail?.price,
  //   price: carDetail?.price,
  //   date: dateTime?.date,
  //   time: dateTime?.time
  // }

  // console.log("book", book);
  const onClick = (e => {
    e.preventDefaul();
  });
  console.log(carDetail?.carmodel.brand.id);
  useEffect(() => {
    dispatch(actFetchCarsAsync(param.id))
    // dispatch(actCarsFetchSearchRelatedAsync({ brandId: carDetail?.carmodel?.brand?.id, modelId: carDetail?.carmodel?.id, minPrice: null, maxPrice: null, area: null }))
    window.scrollTo(0, 0)
  }, [param.id])
 
  function handleChangeDate(e) {
    console.log(e.target.value);
    const formattedDate = Moment(e.target.value).format("YYYY-MM-DD");
    setForm({
      ...form,
      date: formattedDate
    })
  }
  function handleChangeTime(e) {
    const time = +e.target.value
    setForm({
      ...form,
      slot: time
    })
  }

  function handleClick() {
    if (currentUser === null) {
      alert('You can to login')
      navigate('/login')
    } else {
      if (form.date === null || form.slot === null) {
        alert('Vui lòng chọn ngày và giờ')
        return
      }
      bookService.postBook(form, token).then(res => {
        navigate('/cart')
      }).catch(err => {
        console.log(err);
        navigate(`/product-single/${+param.id}`)
        alert(err.response.data.title);

      })

    }
  }
  console.log("--",carWithModel);
  
  return (
    <>
      <section className="gauto-product-details section_70">
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <div className="product-details-image">
                <img src={carDetail?.images[0]?.carImageUrl} alt="product" />
              </div>
              <div className="image-description">
                <a href="#popup1" onClick={() => setIsImage(carDetail?.images[1]?.carImageUrl)}><img src={carDetail?.images[1]?.carImageUrl} alt="product" /></a>
                <a href="#popup1" onClick={() => setIsImage(carDetail?.images[2]?.carImageUrl)}><img src={carDetail?.images[2]?.carImageUrl} alt="product" /></a>
                <a href="#popup1" onClick={() => setIsImage(carDetail?.images[3]?.carImageUrl)}><img src={carDetail?.images[3]?.carImageUrl} alt="product" /></a>
                <a href="#popup1" onClick={() => setIsImage(carDetail?.images[4]?.carImageUrl)}><img src={carDetail?.images[4]?.carImageUrl} alt="product" /></a>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="product-details-text">
                <h3>{carDetail?.type}</h3>
                <div className="car-rating">
                  <ul>
                    <li>
                      <strong>Name:</strong> {carDetail?.carmodel.carModelName} {moment(carDetail?.carmodel?.yearOfManufacture).format("YYYY")}
                    </li>
                    <li>
                      {/* {carDetail?.attribute.attributeName}: {carDetail?.attribute.attributeValue} */}
                      {carDetail?.carattributes.map((e) => (
                        <li>
                          <strong>{e.attribute?.attributeName}:</strong> {e.attributeValue}
                        </li>
                      ))}
                    </li>
                    <li>
                    <strong>{carDetail?.showroom.area}:</strong> {carDetail?.showroom.address}
                    </li>
                    <li>
                    <strong>Status:</strong> {carDetail?.status}
                    </li>
                    {/* <li>
                      <FaStarHalf />
                    </li> */}
                  </ul>
                  {/* <p>123 rating</p> */}
                </div>
                {/* <div className="single-pro-page-para">
                  <p>
                    {carDetail?.desc}
                  </p>
                </div> */}
                <div className="single-shop-price">
                  <p>
                    Price: <span>{carDetail?.price.toLocaleString('en-US')}đ</span>
                  </p>
                  <p style={{ width: "120px" }}><DatePickerComponent min={day} onChange={handleChangeDate} name="date" value='' placeholder="Choice date" /></p>
                  <select placeholder="Choice timeSlot" name="timeSlot" onClick={handleChangeTime}>
                    <option key={0} value="">TimeSlot:</option>
                    <option key={1} value="1">7am-9am</option>
                    <option key={2} value="2">9am-11am</option>
                    <option key={3} value="3">1pm-3pm</option>
                    <option key={4} value="4">3pm-5pm</option>
                  </select>
                  {/* <p style={{ width: "120px" }}><TimePickerComponent name="time" value={"Choice time"} onChange={handleChange} /></p> */}

                </div>
                <div className="single-shop-page-btn">
                  {/* <Link to="/cart" className="gauto-btn" onClick={handleClick}>
                    <FaShoppingCart />
                    add_to_booking
                  </Link> */}
                  <a className="gauto-btn" onClick={handleClick}>
                    <FaShoppingCart />
                    add_to_booking
                  </a>
                  {/* <ul>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div id="popup1" className="overlay">
          <div className="popup">
            <a className="close" href="#">&times;</a>
            <img src={isImage}/>
            <img />
          </div>
        </div>
      </section>
      <section className="gauto-related-products section_b_70">
        <Container>
          <Row>
            <Col md={12}>
              <div className="site-heading">
                <h4>{"products"}</h4>
                <h2>relatedProducts</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {carWithModel?.map((car) => (
              <Col lg={3} sm={6}>
                <div className="product-item">
                  <div className="product-image">
                    <Link to={`/product-single/${car.id}`}>
                      <img alt="product 1" src={car.images[0]?.carImageUrl} />
                    </Link>
                  </div>
                  <div className="product-text">
                    <div className="product-title">
                      <h3>
                        <Link to={`/product-single/${car.id}`}>{car.name}</Link>
                      </h3>
                      <p>{car.price}</p>
                    </div>
                    <div className="product-action">
                      <Link to={`/product-single/${car.id}`}>
                        <FaShoppingCart />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
