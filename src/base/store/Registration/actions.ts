import * as registrationTypes from 'base/store/Registration/constants';

export const registerAction = (payload: any) => ({
  type: registrationTypes.BASE_REGISTER_REQUEST,
  payload,
});

export const registerSuccessAction = () => ({
  type: registrationTypes.BASE_REGISTER_SUCCESS,
});

export const registerErrorAction = (payload: { error: string }) => ({
  type: registrationTypes.BASE_REGISTER_ERROR,
  payload,
});

export default null;
