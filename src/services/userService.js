import { API } from './api';

export const userService = {
  register: (data) => {
    return API.post('/register/customer', data);
  },
  login: (data) => {
    return API.post('authenticate', data);
  },
  fetchMe: (token) => {
    return API.get('account', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  change: (data,token)=>{
    return API.put('admin/users',data,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
  
};
