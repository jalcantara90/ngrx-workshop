import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { AppState } from '../reducer';
// import { select, Store } from '@ngrx/store';
// import { isLoggedIn } from './auth.selectors';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    // private store: Store<AppState>, private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // return this.store.pipe(
    //   select(isLoggedIn),
    //   tap((isLoggedIn) => !isLoggedIn && this.router.navigateByUrl('/auth/login'))
    // );

    return of(true);
  }
}
