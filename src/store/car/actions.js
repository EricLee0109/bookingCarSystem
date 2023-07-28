import { carService } from '../../services/carService'

export const ACT_FETCH_SEARCH_CARS = 'ACT_FETCH_SEARCH_CARS';
export const ACT_FETCH_CARS = 'ACT_FETCH_CARS'
export const ACT_CARS_FETCH_SEARCH = 'ACT_CARS_FETCH_SEARCH'
export const ACT_FETCH_BOOKING_CARS='ACT_FETCH_BOOKING_CARS'
export const ACT_CARS_FETCH_SEARCH_PRICE='ACT_CARS_FETCH_SEARCH_PRICE'
export const ACT_CARS_FETCH_SEARCH_AREA='ACT_CARS_FETCH_SEARCH_AREA'
export const ACT_CARS_FETCH_SEARCH_RELATED='ACT_CARS_FETCH_SEARCH_RELATED'
export function actFetchSearchCars(cars) {
  return {
    type: ACT_FETCH_SEARCH_CARS,
    payload: cars,
  };
}
export function actFetchCars(cars) {
  return {
    type: ACT_FETCH_CARS,
    payload: cars,
  };
}
export function actFetchCarsAsync(id) {
  return async (dispatch) => {
    const response = await carService.getItem(id);
    const carDetail=response.data
    dispatch(actCarsFetchSearchRelatedAsync({ brandId: carDetail?.carmodel?.brand?.id, modelId: carDetail?.carmodel?.id, minPrice: null, maxPrice: null, area: null, carId: id }))
    dispatch(actFetchCars(response.data))
  }
}
export function actFetchBookingCars(car) {
  console.log(car);
  return {
    type: ACT_FETCH_BOOKING_CARS,
    payload: car,
  };
}




export function actCarsFetchSearch(cars) {
  return {
    type: ACT_CARS_FETCH_SEARCH,
    payload: cars
  }
}
export function actCarsFetchSearchAsync(params) {
  return async (dispatch) => {
    const response = await carService.getAll(params);
    dispatch(actCarsFetchSearch(response.data))
  }
}


export function actCarsFetchSearchRelated(cars) {
  return {
    type: ACT_CARS_FETCH_SEARCH_RELATED,
    payload: cars
  }
}
export function actCarsFetchSearchRelatedAsync(params) {
  return async (dispatch) => {
    const response = await carService.getAll(params);
    console.log(params.carId);
    const list = response.data.filter(item => item.id !== +params.carId);
    dispatch(actCarsFetchSearchRelated(list))
  }
}




export function actCarsFetchSearchArea(cars) {
  return {
    type: ACT_CARS_FETCH_SEARCH_AREA,
    payload: cars
  }
}
export function actCarsFetchSearchAsyncArea(params) {
  return async (dispatch) => {
    const response = await carService.getAll(params);
    dispatch(actCarsFetchSearchArea(response.data))
  }
}



export function actCarsFetchSearchPrice(cars) {
  return {
    type: ACT_CARS_FETCH_SEARCH_PRICE,
    payload: cars
  }
}
export function actCarsFetchSearchPriceAsync(params) {
  return async (dispatch) => {
    const response = await carService.getAll(params);
    dispatch(actCarsFetchSearchPrice(response.data))
  }
}