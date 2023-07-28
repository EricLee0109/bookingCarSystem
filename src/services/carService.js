import { API } from './api';

export const carService = {
  getAll: function (params) {
    return API.get('/cars/search', {
      params: params
    });
  },
  getItem: function (id) {
    return API.get('/cars/'+ id);
  },
  // getSearch: function (modelIds) {
  //   let queryString = '';
  //   modelIds.forEach((modelId) => {
  //     queryString += `modelId=${modelId}&`;
  //   });
  //   return API.get(`/cars?${queryString}_expand=model`);
  // }
};

