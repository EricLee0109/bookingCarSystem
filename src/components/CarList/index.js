import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { FaAngleDoubleRight, FaCar, FaCogs, FaTachometerAlt } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useSearchParams } from 'react-router-dom';
import './style.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actCarsFetchSearchAsync } from '../../store/car/actions';
import FormFindCarV2 from '../Findcar/FormFindCarV2';
import { actBrandsFetchAllAsync, actCarByBrandId } from '../../store/brand/actions';
import { brandService } from '../../services/brandService';

const CarList = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { search } = useLocation();
  const listSearch = useSelector((state) => state.CAR.listSearch)
  const listBrands = useSelector((state) => state.BRAND.list)
  const listCarByBrandId = useSelector((state) => state.BRAND.listCar)
  const [status, setStatus] = useState([])
  const [isShow, setIsShow] = useState(false)
  const show = [
    {
      name: 'new',
      value: 3
    },
    {
      name: 'old',
      value: 4
    }
  ]

  console.log("listCarByBrandId", listCarByBrandId);
  console.log("searchParams", searchParams);
  const params = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  console.log("params", params);
  console.log("searchhh", search);
  console.log(listSearch);
  useEffect(() => {
    setStatus(listSearch)
    setIsShow(true)
  }, [listSearch])


  useEffect(() => {
    dispatch(actCarsFetchSearchAsync(params));
  }, [search])
  useEffect(() => {
    dispatch(actBrandsFetchAllAsync());
  }, [])

  function handleClick(e) {
    e.preventDefault();
    const id = e.target.value;
    // brandService.getAllWithCarByBrandId(id).then(res=>{
    //   dispatch(actCarByBrandId(res.data))
    // })
    console.log("id",id);
    navigate(`/car-listing?brandId=${id}`)
    window.scrollTo(0,0)
  }

  const handlePageClick = (e) => {
    e.preventDefault();
  };
  console.log('listSearch', listSearch);

  function handleChangeOrder(e) {
    console.log(+e.target.value);
    const id = +e.target.value
    if (id === 1) {
      listSearch.sort((a, b) => {
        return a.price - b.price;
      });
      setStatus(listSearch)
    } else if (id === 2) {
      listSearch.sort((a, b) => {
        return b.price - a.price;
      });
      setStatus(listSearch)
    } else if (id === 3) {
      let arr;
      arr = listSearch.filter((car) => car.status === 'xe mới')
      setStatus(arr)
    } else if (id === 4) {
      let arr;
      arr = listSearch.filter((car) => car.status === 'xe cũ')
      setStatus(arr)
    }
    window.scrollTo(0,0)
    console.log("9999", listSearch);
    // setStatus(listSearch)
  }
  function handleStatus(e) {
    setIsShow(e)
  }
  console.log("status", status);
  return (
    <section className="gauto-car-listing section_70">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="car-list-left" style={{position:'sticky', top:'10px'}}>
              <div className="sidebar-widget croll" style={{backgroundColor:"#F4F4F5"}}>
                {/* <Form.Select aria-label="Default select example" style={{ width: '130px',marginBottom:'5px' }} onChange={handleChangeOrder}>
                  <option>Status Car</option>
                  {isShow && show.map((item) => (
                    <option name={item.name} value={item.value}>{item.name}</option>
                  ))}
                </Form.Select> */}
                <FormFindCarV2 isShowForm status={handleStatus} />
              </div>
              <div className="sidebar-widget">
                <ul className="service-menu">
                  {listBrands.map((brand) => (
                    <li className='hover' style={{color: params.brandId == brand.id ? 'red' : '' }} key={brand.id}
                      value={brand.id} onClick={handleClick}>{brand.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
          {/* nên chia mỗi row thành 1 component */}
          <Col lg={8}>
            <div className="car-listing-right">
              <div className="car-grid-list">
                {status.length === 0 && <h1>No result</h1>}
                <Row>
                  {status?.map((car) => {
                    
                    car.carattributes.sort((a, b) => {
                      return a.attribute.displayIndex - b.attribute.displayIndex;
                    });
                    return (
                      <Col md={6} key={car.id}>
                        <div className="single-offers">
                          <div className="offer-image">
                            <Link to="/product-single">
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
                                {car.carattributes[2]?.attributeValue.toLocaleString('en-US')}km
                              </li>
                            </ul>
                            <div className="offer-action">
                              <Link to={`/product-single/${car.id}`} className="offer-btn-2">
                                Detail
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                    )
                  })}
                </Row>
              </div>
              {/* <div className="pagination-box-row">
                <p>Page 1 of 6</p>
                <ul className="pagination">
                  <li className="active">
                    <Link to="/" onClick={handlePageClick}>
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={handlePageClick}>
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={handlePageClick}>
                      3
                    </Link>
                  </li>
                  <li>...</li>
                  <li>
                    <Link to="/" onClick={handlePageClick}>
                      6
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={handlePageClick}>
                      <FaAngleDoubleRight />
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarList;
