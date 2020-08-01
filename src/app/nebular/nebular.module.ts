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
  NbUserModule,
  NbContextMenuModule,
  NbMenuModule,
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
  NbCheckboxModule,
  NbUserModule,
  NbContextMenuModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbDialogModule.forRoot(),
    NbMenuModule.forRoot(),
    ...modules
  ],
  exports: [...modules],
})
export class NebularModule {}
