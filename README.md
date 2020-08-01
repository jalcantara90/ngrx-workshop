# NgrxWorkshop

This Repo has several branches, if you want start from the starting point use master.

## 1 Installing NgRx dependencies

> npm install @ngrx/{store,effects,entity,store-devtools} --save

If You want to make you life easier when are you working with NgRx install de schematics

> ng add @ngrx/schematics


## 2 Create the Basic boilerplate of NgRx Store

> ng generate @ngrx/schematics:store --name=store --project=ngrx-workshop --module=app.module.ts --minimal --root

This should update the app.module to add basic configuration

```typescript
  StoreModule.forRoot({}, {
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
    }
  }),
  !environment.production ? StoreDevtoolsModule.instrument() : [],
```

With this you can create the most basic configuration of NgRx store, but if you need an initial reducer you can run

> ng generate @ngrx/schematics:store --name=store --project=ngrx-workshop --module=app.module.ts --root

## 3 Creating Auth state (starting point branch: 1.init-store)

> ng generate @ngrx/schematics:store --name=auth --project=ngrx-workshop --module=auth/auth.module.ts --no-flat --stateInterface=Auth --statePath=auth/reducer

This creates auth/reducer/index.ts file with basic configuration of state, then we need to update the AuthState with properties.

```typescript

import { User } from '../user.model';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

export const reducer = createReducer(
  initialAuthState
);

```

Now is we need to create our first actions, we can create an auth.actions.ts with this two actions

```typescript
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
```

Is the time to update our reducer to listen the created actions for update our store.

```typescript
export const reducer = createReducer(
  initialAuthState,
  on(AuthActions.loginSuccess, (state, action) => ({ user: action.user })),
  on(AuthActions.logout, (state, action) => ({ user: undefined }))
);
```

Now we go to define our auth.effect, because one thing that NgRx provide us is to separete the UI actions with the business logic, and we make it with Effect, let's go to create it!.

we create the auth.effect.ts

```typescript
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from './login.service';
import { login, loginSuccess, loginFail, logout } from './auth.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffect {

  login$ = createEffect(
    () => this.actions$.pipe(
      ofType(login),
      switchMap(({email, password}) =>
        this.authService.login(email, password).pipe(
          map(user => loginSuccess({user})),
          tap((user) => localStorage.setItem('user', JSON.stringify(user))),
          catchError(error => of(loginFail({ error: error.error })))
        )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          localStorage.removeItem('user');
          this.router.navigateByUrl('/auth/login');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
```

We just can change the call of service in login component to call an action

```typescript
login(): void {
  const val = this.form.value;
  this.store.dispatch(login({ email: val.email, password: val.password }));
}
```

Now we are finishing the auth state management, but we need to create some selectors to subscribe to different store slice

```typescript
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, authFeatureKey } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

export const getUser = createSelector(
  selectAuthState,
  auth => auth.user
);

export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);
```

Yeah!, we are ready to use our state in UI, we start importing the selectors in app.component.ts

```typescript
  isLoggedIn$ = this.store.pipe(select(isLoggedIn));
  user$ = this.store.pipe(select(getUser));
```

Then we can use it in app.component.html

```html
<button
  *ngIf="!(isLoggedIn$ | async); else loggedUser"
  [routerLink]="['/auth/login']"
  nbButton
  outline
  size="small"
  status="basic">
  INICIAR SESSIÓN
</button>

...

<ng-template #loggedUser>
  <ng-container *ngIf="user$ | async as user">
    <nb-user
      size="small"
      [name]="user.name"
      title="Software Engineer"
      [picture]="user.img"
      [nbContextMenu]="contextualItems">
    </nb-user>
  </ng-container>
</ng-template>
```
