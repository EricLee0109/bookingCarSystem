import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { FaCar, FaCogs, FaTachometerAlt, FaAngleDoubleRight, FaArrowAltCircleDown } from 'react-icons/fa';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { BRANDS } from '../../mock/Brand';
import { CARS } from '../../mock/Car';
import { CAR_MODELS } from '../../mock/CarModel';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { actBrandsFetchAll, actBrandsFetchAllAsync } from '../../store/brand/actions';
import { brandService } from '../../services/brandService';
import { actCarsFetchSearchAsync, actCarsFetchSearchAsyncArea, actCarsFetchSearchPriceAsync } from '../../store/car/actions';

const HotOffers = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    brandId: null,
    modelId: null,
    area: null,
    minPrice: 0,
    maxPrice: 300000000
  })
  const [formData1, setFormData1] = useState({
    brandId: null,
    modelId: null,
    area: null,
    minPrice: 300000000,
    maxPrice: 500000000
  })
  const [show, setShow] = useState(false)
  const [areaHCM, setAreaHCM] = useState([])
  const [areaHN, setAreaHN] = useState([])

  let carPrice = useSelector((state) => state.CAR.listSearch)
  carPrice = carPrice.slice(0, 6)
  let carPrice300_500 = useSelector((state) => state.CAR.listPrice)
  const listShowroom = useSelector((state) => state.SHOWROOM.list)
  carPrice300_500 = carPrice300_500.slice(0, 6)
  

  const listCar = useSelector((state) => state.CAR.listArea);

  const dispatch = useDispatch()
  const onClick = (e) => {
    e.preventDefault();
  };
  function hanldeClick(e) {
    console.log(+e.target.name);
    const id = +e.target.name
    navigate(`/car-listing?brandId=${id}`)

  }
  console.log("shoiwwww",show);
  const brands = useSelector((state) => state.BRAND.list)
  useEffect(() => {
    brandService.getAll().then(res => {
      console.log("res", res);
      dispatch(actBrandsFetchAll(res.data))
    })
    dispatch(actCarsFetchSearchAsync(formData));
    dispatch(actCarsFetchSearchPriceAsync(formData1));
  }, []);

  function handleClickArea(e) {
    setShow(true)
    console.log(e.target.name);
    const area = e.target.name
    dispatch(actCarsFetchSearchAsyncArea({ brandId: null, modelId: null, minPrice: null, maxPrice: null, area: area }))
  }
  useEffect(() => {
    if (listCar[0]?.showroom.area === 'Hồ Chí Minh') {
      setAreaHCM(listCar)
    } else {
      setAreaHN(listCar)
    }
  }, [listCar])
  function handleClickCar(item) {

    navigate(`/car-listing?area=${item}`)

  }

  return (
    <section className="gauto-offers-area section_70">
      <Container className="gauto">
        <Row>
          <Col md={12}>
            <div className="site-heading">
              <h4>Come With</h4>
              {/* <h2>Hot Offers</h2> */}
            </div>
          </Col>
        </Row>
        <Row>
          {brands?.map((brand) => (
            <Col md={2} style={{ fontWeight: '900' }}>
              <a style={{ cursor: 'pointer' }} onClick={hanldeClick} name={brand.id}>{brand.name}</a>
            </Col>
          ))}
        </Row>
        <div className='carPrice' style={{margin:'20px 0'}}>
          <h3>Tìm xe theo khoảng giá</h3>
        </div>
        <Row>
          <Row style={{ border: '2px solid', borderRadius: '10px', backgroundColor: '#FFFFFF', boxShadow: '1px 2px black', marginBottom: '20px' }}>
            <h5 style={{marginTop:'20px'}}>XE Ô TÔ CŨ DƯỚI 300 TRIỆU</h5>
            {carPrice?.map((car) => {
              car?.carattributes?.sort((a, b) => {
                return a.attribute.displayIndex - b.attribute.displayIndex;
              });
              return (
                <Col lg={4} style={{marginBottom:'20px', marginTop:'-30px'}}>
                  <div className="single-offers">
                    <div className="offer-image">
                      <Link to={`/product-single/${car.id}`}>
                        <img src={car.images[0]?.carImageUrl} alt="offer 1" />
                      </Link>
                    </div>
                    <div className="offer-text">
                      <Link to="/car-booking">
                        <h3>
                          {car.name}
                        </h3>
                      </Link>
                      <h4>Price: {car.price.toLocaleString('en-US')}đ</h4>
                      <ul>
                        <li>
                          <FaCar />
                          {car.carmodel.yearOfManufacture}
                        </li>
                        <li>
                          <FaCogs />
                          {car.carattributes[1]?.attributeValue}
                        </li>
                        <li>
                          <FaTachometerAlt />
                          {car.carattributes[2]?.attributeValue}
                        </li>
                      </ul>
                      <div className="offer-action">
                        <Link to={`/product-single/${car.id}`} className="offer-btn-2" style={{ color: 'wheat' }}>
                          Xem chi tiết <FaAngleDoubleRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row style={{ border: '2px solid', borderRadius: '10px', backgroundColor: '#FFFFFF', boxShadow: '1px 2px black', marginBottom: '20px' }}>
            <h5 style={{marginTop:'20px'}}>XE Ô TÔ CŨ 300-500 TRIỆU</h5>
            {carPrice300_500.map((car) => {
              car.carattributes.sort((a, b) => {
                return a.attribute.displayIndex - b.attribute.displayIndex;
              });
              console.log(car.carattributes);
              return (
                < Col lg={4} style={{marginBottom:'20px', marginTop:'-30px'}}>
                  <div className="single-offers">
                    <div className="offer-image">
                      <Link to={`/product-single/${car.id}`}>
                        <img src={car.images[0]?.carImageUrl} alt="offer 1" />
                      </Link>
                    </div>
                    <div className="offer-text">
                      <Link to="/car-booking">
                        <h3>
                          {car.name}
                        </h3>
                      </Link>
                      <h4>Price: {car.price.toLocaleString('en-US')}đ</h4>
                      <ul>
                        <li>
                          <FaCar />
                          {car.carmodel.yearOfManufacture}
                        </li>
                        <li>
                          <FaCogs />
                          {car.carattributes[1]?.attributeValue}
                        </li>
                        <li>
                          <FaTachometerAlt />
                          {car.carattributes[2]?.attributeValue}
                        </li>
                      </ul>
                      <div className="offer-action">
                        <Link to={`/product-single/${car.id}`} className="offer-btn-2"
                          style={{ color: 'wheat' }}>
                          Xem chi tiết <FaAngleDoubleRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
          {/* <Row style={{ border: '2px solid', borderRadius: '10px', backgroundColor: '#FFFFFF', boxShadow: '1px 2px black', marginBottom: '20px' }}>
            <h5 style={{marginTop:'20px',marginBottom:'10px'}}>Thành phố nổi bật</h5>
            {listShowroom.map((showroom) => {
              return (
                <Col md={6} style={{marginBottom:'10px'}}>
                  <h6>Chọn thành phố <FaArrowAltCircleDown /></h6>
                  <a className='hover' style={{ cursor: 'pointer', fontSize: '20px' }} onClick={handleClickArea} name={showroom.area}>
                    Ô tô cũ tại {showroom.area}</a>
                </Col>
              )
            })}
            {show && <Col>
              <a onClick={() => handleClickCar(listCar[0]?.showroom.area)} style={{ cursor: 'pointer', color: '#1658e8' }}>{listCar.length} xe đang bán tại {listCar[0]?.showroom.area} Xem chi tiết<FaAngleDoubleRight /></a>
            </Col>}
          </Row> */}
        </Row>
      </Container>
    </section >
  );
};

export default HotOffers;
