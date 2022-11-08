import { loginAction, loginErrorAction, loginSuccessAction } from 'base/store/Login/actions';

export type LoginActionType = ReturnType<typeof loginAction>;
export type LoginSuccessActionType = ReturnType<typeof loginSuccessAction>;
export type LoginErrorActionType = ReturnType<typeof loginErrorAction>;

export type LoginActionsType = LoginActionType | LoginSuccessActionType | LoginErrorActionType;
