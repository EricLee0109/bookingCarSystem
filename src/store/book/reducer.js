import { ACT_BOOK_FETCH } from "./actions";

const initialState = {
  list: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACT_BOOK_FETCH:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;