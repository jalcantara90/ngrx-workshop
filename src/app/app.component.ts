import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { loginSuccess, logout } from './auth/auth.actions';
import { User } from './auth/user.model';
import { AppState } from './reducer';
import { isLoggedIn, getUser } from './auth/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subcription: Subscription;
  contextualItems = [{ title: 'Logout' }];
  isLoggedIn$ = this.store.pipe(select(isLoggedIn));
  user$ = this.store.pipe(select(getUser));

  constructor(
    private menuService: NbMenuService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    const userProfile = localStorage.getItem('user');

    if (userProfile) {
      this.store.dispatch(loginSuccess({ user: JSON.parse(userProfile) as User}));
    }

    this.subcription = this.menuService.onItemClick()
      .subscribe(() => this.store.dispatch(logout()));
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
