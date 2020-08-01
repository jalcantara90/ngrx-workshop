import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { NebularModule } from '../nebular/nebular.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NebularModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
