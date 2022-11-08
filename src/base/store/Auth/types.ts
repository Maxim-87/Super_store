import { loginAction, loginErrorAction, loginSuccessAction } from 'base/store/Auth/actions';

export type LoginActionType = ReturnType<typeof loginAction>;
export type LoginSuccessActionType = ReturnType<typeof loginSuccessAction>;
export type LoginErrorActionType = ReturnType<typeof loginErrorAction>;

export type AuthActionsType = LoginActionType | LoginSuccessActionType | LoginErrorActionType;
