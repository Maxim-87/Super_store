import * as registrationTypes from 'base/store/Registration/constants';
import type { RegistrationActionsType } from 'base/store/Registration/types';
import { RequestInfoType } from 'base/types/base/reducer';
import { RequestInfoState } from 'base/types/base/state';

export type RegistrationState = {
  register: {
    isRegister: boolean;
    email?: string;
  } & RequestInfoType;
};

const initialState: RegistrationState = {
  register: {
    isRegister: false,
    ...RequestInfoState,
  },
};

export const registrationReducer = (
  // eslint-disable-next-line default-param-last
  state: RegistrationState = initialState,
  action: RegistrationActionsType
): RegistrationState => {
  switch (action.type) {
    case registrationTypes.BASE_REGISTER_REQUEST: {
      const { payload } = action;

      return {
        ...state,
        register: {
          ...state.register,
          email: payload.email,
          isLoading: true,
        },
      };
    }

    case registrationTypes.BASE_REGISTER_SUCCESS: {
      console.log('BASE_REGISTER_SUCCESS');

      return {
        ...state,
        register: {
          ...state.register,
          isRegister: true,
          isLoading: false,
        },
      };
    }

    case registrationTypes.BASE_REGISTER_ERROR: {
      const { payload } = action;

      return {
        ...state,
        register: {
          ...state.register,
          isRegister: false,
          isLoading: false,
          error: payload.error,
        },
      };
    }

    default: {
      return state;
    }
  }
};
