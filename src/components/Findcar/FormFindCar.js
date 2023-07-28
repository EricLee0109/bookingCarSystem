import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actBrandsFetchAllAsync } from '../../store/brand/actions';
import { actModelsFetchAllByBrandAsync } from '../../store/model/actions';

function FormFindCar(props) {
  const { isShowForm, brandID, modelId } = props;
  // console.log("showrooms", showrooms);
  const [formData, setFormData] = useState({
    brandId: null,
    modelId: null,
  })

  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.BRAND.list);
  let modelsByBrand = useSelector((state) => state.MODEL.listByBrand);
  const [models,setModels]= useState(modelsByBrand)
  const SubmitHandler = (e) => {
    e.preventDefault();
    const sendData={}
    for (const property in formData) {
      if(formData[property]){
        sendData[property]=formData[property]
      }
    }    
    const queryString = new URLSearchParams(sendData).toString()

    navigate(`/car-listing?${queryString}`);
  };
  console.log(modelsByBrand);
  useEffect(() => {
    dispatch(actBrandsFetchAllAsync());
  }, []);
  // console.log("formData",formData);
  useEffect(() => {
    if (formData.brandId||formData.brandId==='') {
      dispatch(actModelsFetchAllByBrandAsync(formData.brandId))
    }else{
    setFormData({...formData, modelId:null})
    }
  }, [formData.brandId])


  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    })
  }


  return (
    <form onSubmit={SubmitHandler}>
      <Row>
        <Col md={4}>
          <p>
            <select name='brandId' placeholder="Choose Brand" onChange={handleChange}>
              <option key={0} value="">
                Brand
              </option>
              {brands.map((brand) => (

                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </p>
        </Col>
        <Col md={4}>
          <p>
            <select name='modelId' placeholder="Choose Model" onChange={handleChange}>
              <option key={0} value="">
                Model
              </option>
              {modelsByBrand?.carmodels?.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.carModelName}
                </option>
              ))}
            </select>
          </p>
        </Col>
        {show && (
          <Col md={4}>
            <p>
              <button type="submit" className="gauto-theme-btn">
                Find Car
              </button>
            </p>
          </Col>
        )}
      </Row>
    </form>
  );
}

export default FormFindCar;
