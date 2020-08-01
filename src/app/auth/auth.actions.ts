import {createAction, props} from '@ngrx/store';
import { User } from './user.model';

export const login = createAction(
  '[Login Page] User Login',
  props<{email: string, password: string}>()
);

export const loginSuccess = createAction(
  '[Login Page] User Login success',
  props<{user: User}>()
);

export const loginFail = createAction(
  '[Login Page] User Login Fail',
  props<{error: any}>()
);

export const logout = createAction(
  '[Top Menu] Logout'
);
