import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbBadgeModule,
  NbIconModule,
  NbTabsetModule,
  NbSpinnerModule,
  NbDialogModule,
  NbCheckboxModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const modules = [
  NbEvaIconsModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbBadgeModule,
  NbIconModule,
  NbTabsetModule,
  NbSpinnerModule,
  NbCheckboxModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbDialogModule.forRoot(),
    ...modules
  ],
  exports: [...modules],
})
export class NebularModule {}
