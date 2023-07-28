import { ACT_USER_FETCH_ME, ACT_USER_NOT_FETCH_ME} from "./actions";

const initialState = {
  token: null,
  currentUser: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACT_USER_FETCH_ME:
      localStorage.setItem('ACCESS_TOKEN', action.payload.token);
      return {
        ...state,
        currentUser: action.payload.currentUser,
        token: action.payload.token
      }
    case ACT_USER_NOT_FETCH_ME:
      localStorage.setItem('ACCESS_TOKEN',null)
      return{
        ...state,
        currentUser:action.payload
      }
    default:
      return state;
  }
}

export default reducer;