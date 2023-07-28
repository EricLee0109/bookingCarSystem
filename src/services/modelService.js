import { API } from './api';

export const modelService = {
  getAllByBrand: function (idBrand) {
    return API.get('/brands/'+idBrand);
  },
  getAllWithCars: function (id) {
    return API.get(`/car-models/${id}`);
  },
  getAllModelsCars: function (){
    return API.get(`/car-models`)
  }
};
