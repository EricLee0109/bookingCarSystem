import { ACT_CARS_FETCH_SEARCH, ACT_CARS_FETCH_SEARCH_AREA, ACT_CARS_FETCH_SEARCH_PRICE, ACT_CARS_FETCH_SEARCH_RELATED, ACT_FETCH_BOOKING_CARS, ACT_FETCH_CARS } from './actions';

const initialState = {
  listSearch: [],
  carDetail:null,
  listBooks:[],
  listPrice:[],
  listArea:[],
  listRelated:[]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACT_CARS_FETCH_SEARCH:
      return {
        ...state,
        listSearch: action.payload,
      };
    case ACT_FETCH_CARS:
      return {
        ...state,
        carDetail:action.payload
      }
    // case ACT_FETCH_BOOKING_CARS:
    //   let book=state.listBooks;
    //   console.log(action.payload);
    //   book.push(action.payload)
    //   localStorage.setItem('Book', JSON.stringify(book));
    //   return{
    //     ...state,
    //     listBooks:[...book]
    //   }
    case ACT_CARS_FETCH_SEARCH_PRICE:
      return{
        ...state,
        listPrice: action.payload
      }
    case ACT_CARS_FETCH_SEARCH_AREA:
      return{
        ...state,
        listArea:action.payload
      }
    case ACT_CARS_FETCH_SEARCH_RELATED:
      return{
        ...state,
        listRelated:action.payload
      }
    default:
      return state;
  }
}

export default reducer;
