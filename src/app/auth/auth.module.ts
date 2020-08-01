import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { NebularModule } from '../nebular/nebular.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './auth.effects';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NebularModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: 'login', component: LoginComponent }]),
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffect]),
  ],
  exports: [LoginComponent]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        AuthGuard
      ]
    };
  }
}
