import { modalOpenAction, modalCloseAction } from 'base/store/Modal/actions';

export type ModalActions = ReturnType<typeof modalOpenAction> | ReturnType<typeof modalCloseAction>;
