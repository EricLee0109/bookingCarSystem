import { combineReducers, createStore, applyMiddleware } from 'redux';
import brandReducer from './brand/reducer';
import modelReducer from './model/reducer';
import carReducer from './car/reducer';
import userReducer from './user/reducer';
import showroomReducer from './showroom/reducer'
import bookingReducer from './book/reducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  BRAND: brandReducer,
  MODEL: modelReducer,
  CAR: carReducer,
  USER: userReducer,
  SHOWROOM: showroomReducer,
  BOOKING:bookingReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
