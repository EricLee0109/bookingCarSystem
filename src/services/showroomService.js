import { API } from './api';

export const showroomService = {
  getAll: function () {
    return API.get('/show-rooms');
  },
};