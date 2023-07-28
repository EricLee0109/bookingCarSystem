import React, { Fragment } from 'react';
import AllRoute from '../router';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { brandService } from '../../services/brandService';
import { modelService } from '../../services/modelService';
import { actFetchModels, actModelsFetchAllAsync } from '../../store/model/actions';
import { userService } from '../../services/userService';
import { actUserFetchMe } from '../../store/user/actions';
import { actShowroomsFetchAllAsync } from '../../store/showroom/actions';
import { actBookGetFetchAsync } from '../../store/book/actions';

const App = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('ACCESS_TOKEN');
  const listShowroom=useSelector((state)=>state.SHOWROOM.list)
  console.log("list",listShowroom);
  useEffect(() => {
    userService.fetchMe(token).then(res => {
      const currentUser = res.data;
      dispatch(actUserFetchMe(currentUser, token))
    });
    dispatch(actShowroomsFetchAllAsync());
    dispatch(actBookGetFetchAsync(token))
    dispatch(actModelsFetchAllAsync())
  }, []);
  return (
    <Fragment>
      <AllRoute />
    </Fragment>
  );
};

export default App;
