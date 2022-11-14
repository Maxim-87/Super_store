import { AuthState } from 'base/store/Auth/reducer';
import { ModalState } from 'base/store/Modal';
import { ProductState } from 'base/store/Product/reducer';
import { ProductsState } from 'base/store/Products/reducer';
import { RegistrationState } from 'base/store/Registration/reducer';
import { SearchState } from 'base/store/Search/reducer';

export type BaseStateClear = {
  auth: AuthState;
  registration: RegistrationState;
  products: ProductsState;
  product: ProductState;
  search: SearchState;
  modal: ModalState;
};

export type BaseState = {
  auth: AuthState;
  registration: RegistrationState;
  products: ProductsState;
  product: ProductState;
  search: SearchState;
  modal: ModalState;
};
