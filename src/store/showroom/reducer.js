import { ACT_SHOWROOMS_FETCH_ALL } from './actions';

const initialState = {
  list: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACT_SHOWROOMS_FETCH_ALL:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;