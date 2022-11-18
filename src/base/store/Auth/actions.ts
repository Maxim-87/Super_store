import * as authTypes from 'base/store/Auth/constants';

// --------------------------------------- login

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

// --------------------------------------- auth

export const authAction = () => ({
  type: authTypes.BASE_AUTH_REQUEST,
});

export const authSuccessAction = () => ({
  type: authTypes.BASE_AUTH_SUCCESS,
});

export const authErrorAction = (payload: { error: string }) => ({
  type: authTypes.BASE_AUTH_ERROR,
  payload,
});

// --------------------------------------- logout

export const logoutAction = () => ({
  type: authTypes.BASE_LOGOUT_REQUEST,
});

export default null;
