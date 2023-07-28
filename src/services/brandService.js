import { API } from './api';

export const brandService = {
  getAll: function () {
    return API.get('/brands');
  },
  getAllWithModels: function () {
    return API.get('/brands?_embed=models');
  },
  getAllWithCarByBrandId: function (id) {
    return API.get('/cars/model/'+id);
  },
};
