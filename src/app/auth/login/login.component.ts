import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noop } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    email: ['jalcantara@mail.com', [Validators.required]],
    password: ['test', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: LoginService
  ) { }


  ngOnInit(): void {
  }

  login() {
    const val = this.form.value;

    this.auth
      .login(val.email, val.password)
      .pipe(
        tap((user) => {
          console.log(user);
          // this.store.dispatch(login({ user }));
          this.router.navigateByUrl('/');
        })
      ).subscribe(noop, () => alert('Login Failed'));
  }
}
