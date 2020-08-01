import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
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
  products$: Observable<Product[]>;
  newsProducts$: Observable<Product[]>;
  recommendedProducts$: Observable<Product[]>;
  loading$: Observable<boolean>;
  newsAmount$: Observable<number>;
  isUserLoggedIn$: Observable<boolean> = this.store.pipe(select(isLoggedIn));

  constructor(
    private productService: ProductService,
    private store: Store<ProductState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getProducts());
    this.newsProducts$ = this.store.pipe(select(selectNewProducts));
    this.recommendedProducts$ = this.store.pipe(
      select(selectRecommendedProducts)
    );
    this.loading$ = this.store.pipe(select(loadingProducts));
    this.newsAmount$ = this.store.pipe(select(selectNewAmount));
  }

  deleteProduct(productId: string) {
    this.store.dispatch(deleteProduct({ productId }));
  }

  editProduct(product: Product) {
    this.store.dispatch(selectProductToUpdate({product}));
  }
}
