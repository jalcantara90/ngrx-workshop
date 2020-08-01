import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { NebularModule } from '../nebular/nebular.module';
import { ProductComponent } from './product/product.component';
import { NbDialogModule } from '@nebular/theme';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductListComponent, ProductComponent, ProductFormComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NebularModule,
    NbDialogModule.forChild(),
    ReactiveFormsModule
  ],
  entryComponents: [ProductFormComponent]
})
export class ProductsModule { }
