import { brandService } from "../../services/brandService";

export const ACT_BRANDS_FETCH_ALL = 'ACT_BRANDS_FETCH_ALL';
export const ACT_CARS_BY_BRAND_FETCH_ALL='ACT_CARS_BY_BRAND_FETCH_ALL'
export function actBrandsFetchAll(brands) {
  return {
    type: ACT_BRANDS_FETCH_ALL,
    payload: brands,
  };
}
export function actCarByBrandId(items) {
  return {
    type: ACT_CARS_BY_BRAND_FETCH_ALL,
    payload: items,
  };
}


export function actBrandsFetchAllAsync() {
  return async (dispatch) => {
    const response = await brandService.getAll();
    dispatch(actBrandsFetchAll(response.data))
  }
}