import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, tap, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../product.model';
import { Store, select } from '@ngrx/store';
import { ProductState } from '../product.reducer';
import { selectedProduct } from '../product.selectors';
import { updateProduct, createProduct, unSelectProduct } from '../product.actions';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  private productId: string;

  form = this.fb.group({
    name: ['', [Validators.required]],
    price: [0, [Validators.required]],
    imgUrl: ['', [Validators.required]],
    isRecommended: [false],
    isNew: [true]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<ProductState>
  ) { }

  ngOnInit(): void {
    this.subscription = this.store.pipe(
      select(selectedProduct),
      filter(product => !!product),
      tap(productSelected => {
        const {id, ...product} = productSelected;
        this.productId = id;
        this.form.setValue(product);
        this.store.dispatch(unSelectProduct());
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  saveProduct() {
    if (this.productId) {
      this.store.dispatch(updateProduct({ productId: this.productId, product: this.form.value }));
    } else {
      this.store.dispatch(createProduct({ product: this.form.value }));
    }
  }

}
