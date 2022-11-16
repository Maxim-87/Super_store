import React, { useEffect } from 'react';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import { BaseRouter } from '../routes';

import LoaderSpinner from 'base/components/LoaderSpinner';
import { authAction } from 'base/store/Auth/actions';
import { BaseState } from 'base/types/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const App = () => {
  const dispatch = useDispatch();

  const {
    auth: { auth },
  } = useSelector((state: BaseState) => state);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(authAction());
    }
  }, []);

  return <div className="App">{auth.isInitialized ? <LoaderSpinner /> : <BaseRouter />}</div>;
};

export default App;
