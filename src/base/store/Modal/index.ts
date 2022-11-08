import React from 'react';

import * as modalTypes from 'base/store/Modal/constants';
import type { ModalActions } from 'base/store/Modal/types';

export type ModalState = {
  modalComponent: React.ReactNode;
  isOpen: boolean;
};

export type ModalActionsType = ModalActions;

const initialState: ModalState = {
  modalComponent: null,
  isOpen: false,
};

export const modalReducer = (
  // eslint-disable-next-line default-param-last
  state: ModalState = initialState,
  action: ModalActionsType
): ModalState => {
  switch (action.type) {
    case modalTypes.BASE_MODAL_CLOSE: {
      return {
        ...initialState,
      };
    }

    case modalTypes.BASE_MODAL_OPEN: {
      const { payload } = action;

      return {
        ...state,
        modalComponent: payload,
        isOpen: true,
      };
    }

    default: {
      return state;
    }
  }
};
