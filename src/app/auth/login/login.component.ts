import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState } from '../auth.reducer';
import { login } from '../auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = this.fb.group({
    email: ['jalcantara@mail.com', [Validators.required]],
    password: ['test', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<AuthState>
  ) { }

  login(): void {
    const val = this.form.value;
    this.store.dispatch(login({ email: val.email, password: val.password }));
  }
}
