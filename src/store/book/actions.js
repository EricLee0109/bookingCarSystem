import { bookService } from "../../services/bookService";

export const ACT_BOOK_FETCH = 'ACT_BOOK_FETCH';

export function actBookFect(params){
  return{
    type: ACT_BOOK_FETCH,
    payload:params
  }
}
export function actBookFetchAsync(id,token) {
  return async (dispatch) => {
    const response = await bookService.deleteBook(id,token);
    console.log("data",response.data);
    const listBooks= await bookService.getBook(token)
    dispatch(actBookFect(listBooks.data))
  }
}
export function actBookGetFetchAsync(token) {
  return async (dispatch) => {
    const listBooks= await bookService.getBook(token)
    dispatch(actBookFect(listBooks.data))
  }
}