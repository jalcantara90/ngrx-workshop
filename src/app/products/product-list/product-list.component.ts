import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { Store, select } from '@ngrx/store';
import { ProductState } from '../product.reducer';
import { getProducts, selectProductToUpdate, deleteProduct } from '../product.actions';
import { isLoggedIn } from '../../auth/auth.selectors';
import {
  selectNewProducts,
  selectRecommendedProducts,
  loadingProducts,
  selectNewAmount,
} from '../product.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  newsProducts$: Observable<Product[]> = this.store.pipe(select(selectNewProducts));;
  recommendedProducts$: Observable<Product[]> = this.store.pipe(select(selectRecommendedProducts));
  loading$: Observable<boolean> = this.store.pipe(select(loadingProducts));
  newsAmount$: Observable<number> = this.store.pipe(select(selectNewAmount));
  isUserLoggedIn$: Observable<boolean> = this.store.pipe(select(isLoggedIn));

  constructor(private store: Store<ProductState>) {}

  ngOnInit(): void {
    this.store.dispatch(getProducts());
  }

  deleteProduct(productId: string): void {
    this.store.dispatch(deleteProduct({ productId }));
  }

  editProduct(product: Product): void {
    this.store.dispatch(selectProductToUpdate({product}));
  }
}
