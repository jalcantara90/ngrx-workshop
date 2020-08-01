import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducer';
import { isLoggedIn } from './auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<AppState>, private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(isLoggedIn),
      tap((isLogged) => !isLogged && this.router.navigateByUrl('/auth/login'))
    );
  }
}
