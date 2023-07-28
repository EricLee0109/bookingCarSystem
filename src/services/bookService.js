import { API } from "./api";

export const bookService = {
  postBook: function (item,token) {
    return API.post('/bookings/test',item,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  getBook: function (token) {
    return API.get('/bookings/user',{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  deleteBook: function (id,token) {
    return API.delete(`/bookings/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

}