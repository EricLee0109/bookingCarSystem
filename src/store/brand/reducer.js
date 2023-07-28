import { ACT_BRANDS_FETCH_ALL, ACT_CARS_BY_BRAND_FETCH_ALL } from './actions';

const initialState = {
  list: [],
  listCar: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACT_BRANDS_FETCH_ALL:
      return {
        ...state,
        list: action.payload,
      };
    case ACT_CARS_BY_BRAND_FETCH_ALL:
      return{
        ...state,
        listCar:action.payload
      }
    default:
      return state;
  }
}

export default reducer;
