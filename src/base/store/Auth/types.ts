import {
  authAction,
  authErrorAction,
  authSuccessAction,
  loginAction,
  loginErrorAction,
  loginSuccessAction,
  logoutAction,
} from 'base/store/Auth/actions';

// ------------------------------------- login

export type LoginActionType = ReturnType<typeof loginAction>;
export type LoginSuccessActionType = ReturnType<typeof loginSuccessAction>;
export type LoginErrorActionType = ReturnType<typeof loginErrorAction>;

// ------------------------------------- auth

export type AuthActionType = ReturnType<typeof authAction>;
export type AuthSuccessActionType = ReturnType<typeof authSuccessAction>;
export type AuthErrorActionType = ReturnType<typeof authErrorAction>;

// ------------------------------------- logout

export type LogoutActionType = ReturnType<typeof logoutAction>;

export type AuthActionsType =
  | LoginActionType
  | LoginSuccessActionType
  | LoginErrorActionType
  | AuthActionType
  | AuthSuccessActionType
  | AuthErrorActionType
  | LogoutActionType;
