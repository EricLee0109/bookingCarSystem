import { showroomService } from "../../services/showroomService";

export const ACT_SHOWROOMS_FETCH_ALL = 'ACT_SHOWROOMS_FETCH_ALL';

export function actShowroomsFetchAll(items) {
  return {
    type: ACT_SHOWROOMS_FETCH_ALL,
    payload: items,
  };
}

export function actShowroomsFetchAllAsync() {
  return async (dispatch) => {
    const response = await showroomService.getAll();
    dispatch(actShowroomsFetchAll(response.data))
  }
}