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

export type authActionType = ReturnType<typeof authAction>;
export type authSuccessActionType = ReturnType<typeof authSuccessAction>;
export type authErrorActionType = ReturnType<typeof authErrorAction>;

// ------------------------------------- logout

export type LogoutActionType = ReturnType<typeof logoutAction>;

export type AuthActionsType =
  | LoginActionType
  | LoginSuccessActionType
  | LoginErrorActionType
  | authActionType
  | authSuccessActionType
  | authErrorActionType
  | LogoutActionType;
