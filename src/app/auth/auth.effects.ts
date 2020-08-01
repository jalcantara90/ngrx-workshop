import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from './auth.service';
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
          tap((user) => {
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigateByUrl('/');
          }),
          map(user => loginSuccess({user})),
          catchError(error => of(loginFail({ error: error.error })))
        )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => localStorage.removeItem('user'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
