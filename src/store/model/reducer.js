import { ACT_MODELS_FETCH_ALL, ACT_MODELS_FETCH_ALL_BY_BRAND, ACT_MODELS_FETCH_ALL_BY_CAR } from './actions';

const initialState = {
  listByBrand: [],
  listAllCarWithModel:[],
  listAllModelsCars:[]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACT_MODELS_FETCH_ALL_BY_BRAND:
      return {
        ...state,
        listByBrand: action.payload,
      };
    case ACT_MODELS_FETCH_ALL_BY_CAR:
      return{
        ...state,
        listAllCarWithModel:action.payload
      }
    case ACT_MODELS_FETCH_ALL:
      return{
        ...state,
        listAllModelsCars:action.payload
      }
    default:
      return state;
  }
}

export default reducer;
