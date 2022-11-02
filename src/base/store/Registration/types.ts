import {
  registerAction,
  registerErrorAction,
  registerSuccessAction,
} from 'base/store/Registration/actions';

export type RegisterActionType = ReturnType<typeof registerAction>;
export type RegisterSuccessActionType = ReturnType<typeof registerSuccessAction>;
export type RegisterErrorActionType = ReturnType<typeof registerErrorAction>;

export type RegistrationActionsType =
  | RegisterActionType
  | RegisterSuccessActionType
  | RegisterErrorActionType;
