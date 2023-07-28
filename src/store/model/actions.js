import {modelService} from '../../services/modelService'

export const ACT_MODELS_FETCH_ALL_BY_BRAND = 'ACT_MODELS_FETCH_ALL_BY_BRAND';
export const ACT_MODELS_FETCH_ALL_BY_CAR='ACT_MODELS_FETCH_ALL_BY_CAR'
export const ACT_MODELS_FETCH_ALL='ACT_MODELS_FETCH_ALL'
export function actModelsFetchAllByBrand(models) {
  return {
    type: ACT_MODELS_FETCH_ALL_BY_BRAND,
    payload: models,
  };
}
export function actModelsFetchAllByBrandAsync(idBrand) {
  return async (dispatch) => {
    const response = await modelService.getAllByBrand(idBrand);
    console.log(response.data);
    dispatch(actModelsFetchAllByBrand(response.data))
  }
}
export function actModelsFetchAllByCar(models) {
  return {
    type: ACT_MODELS_FETCH_ALL_BY_CAR,
    payload: models,
  };
}
export function actModelsFetchAllByCarAsync(idModel) {
  return async (dispatch) => {
    const response = await modelService.getAllWithCars(idModel);
    console.log(response.data);
    dispatch(actModelsFetchAllByCar(response.data))
  }
}

export function actModelsFetchAll(models) {
  return {
    type: ACT_MODELS_FETCH_ALL,
    payload: models,
  };
}
export function actModelsFetchAllAsync() {
  return async (dispatch) => {
    const response = await modelService.getAllModelsCars();
    console.log(response.data);
    dispatch(actModelsFetchAll(response.data))
  }
}
