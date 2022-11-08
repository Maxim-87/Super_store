import * as loginTypes from 'base/store/Login/constants';

export const loginAction = (payload: any) => ({
  type: loginTypes.BASE_LOGIN_REQUEST,
  payload,
});

export const loginSuccessAction = () => ({
  type: loginTypes.BASE_LOGIN_SUCCESS,
});

export const loginErrorAction = (payload: { error: string }) => ({
  type: loginTypes.BASE_LOGIN_ERROR,
  payload,
});

export default null;
