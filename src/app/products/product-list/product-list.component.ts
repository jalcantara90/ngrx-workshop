import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

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

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const products$ = this.productService.getAllProducts();
    this.newsProducts$ = products$.pipe(
      map(productList => productList.filter(product => product.isNew))
    );
    this.recommendedProducts$ = products$.pipe(
      map(productList => productList.filter(product => product.isRecommended))
    );

    this.loading$ = products$.pipe(
      map(productList => !!productList)
    );
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe();
  }

  editProduct(product: Product) {
    this.productService.productSelected = product;
    this.router.navigateByUrl('/product-form');
  }
}
