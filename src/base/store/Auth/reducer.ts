import * as authTypes from './constants';

import { AuthActionsType } from 'base/store/Auth/types';
import { RequestInfoType } from 'base/types/base/reducer';
import { RequestInfoState } from 'base/types/base/state';

export type AuthState = {
  auth: {
    login: boolean;
  } & RequestInfoType;
};

const initialState: AuthState = {
  auth: {
    login: false,
    ...RequestInfoState,
  },
};

export const authReducer = (
  // eslint-disable-next-line default-param-last
  state: AuthState = initialState,
  action: AuthActionsType
): AuthState => {
  switch (action.type) {
    case authTypes.BASE_LOGIN_REQUEST: {
      return {
        ...state,
        auth: {
          ...state.auth,
          isLoading: true,
        },
      };
    }

    case authTypes.BASE_LOGIN_SUCCESS: {
      // const { payload } = action;
      console.log('authTypes.BASE_LOGIN_SUCCESS');

      return {
        ...state,
        auth: {
          ...state.auth,
          login: true,
          isLoading: false,
        },
      };
    }

    case authTypes.BASE_LOGIN_ERROR: {
      const { payload } = action;

      console.log(' case authTypes.BASE_LOGIN_ERROR');

      return {
        ...state,
        auth: {
          ...state.auth,
          error: payload.error,
          isLoading: false,
        },
      };
    }

    // // --------------------------------------LOGOUT
    //
    // 	case authPersistTypes.AUTH_PERSIST_LOGOUT: {
    // 		return initialState;
    // 	}

    default: {
      return state;
    }
  }
};
