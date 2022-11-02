import React from 'react';

import * as modalTypes from 'base/store/Modal/constants';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const modalOpenAction = (payload: React.ReactNode) => {
  window.scrollTo({
    behavior: 'smooth',
  });

  return {
    type: modalTypes.BASE_MODAL_OPEN,
    payload,
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const modalCloseAction = () => ({
  type: modalTypes.BASE_MODAL_CLOSE,
});

export default null;
