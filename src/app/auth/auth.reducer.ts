import {
  createReducer,
  on
} from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { User } from './user.model';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: null,
};

export const reducer = createReducer(
  initialAuthState,
  on(AuthActions.loginSuccess, (state, action) => ({ user: action.user })),
  on(AuthActions.logout, (state, action) => ({ user: null }))
);
