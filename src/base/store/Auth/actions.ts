import * as authTypes from 'base/store/Auth/constants';

export const loginAction = (payload: any) => ({
  type: authTypes.BASE_LOGIN_REQUEST,
  payload,
});

export const loginSuccessAction = () => ({
  type: authTypes.BASE_LOGIN_SUCCESS,
});

export const loginErrorAction = (payload: { error: string }) => ({
  type: authTypes.BASE_LOGIN_ERROR,
  payload,
});

export default null;
