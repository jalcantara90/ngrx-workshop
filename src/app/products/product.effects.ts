import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ProductService } from './product.service';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import {
  getProductsFailure,
  getProductsSuccess,
  getProducts,
  createProduct,
  createProductSuccess,
  createProductFailure,
  selectProductToUpdate,
  updateProduct,
} from './product.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { updateProductSuccess, deleteProduct, deleteProductSuccess } from './product.actions';

@Injectable()
export class ProductEffect {
  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProducts),
      switchMap(() =>
        this.productService.getAllProducts().pipe(
          map(
            (productList) => getProductsSuccess({ data: productList }),
            catchError((error) => of(getProductsFailure({ error: error.error })))
          )
        )
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProduct),
      switchMap((action) =>
        this.productService.createProduct(action.product).pipe(
          map((product) => {
            this.router.navigateByUrl('/');
            return createProductSuccess({ product });
          }),
          catchError((error) => of(createProductFailure({ error: error.error })))
        )
      )
    )
  );

  selectProductToUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(selectProductToUpdate),
        tap(() => this.router.navigateByUrl('/product-form'))
      ),
    { dispatch: false }
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProduct),
      switchMap((action) =>
        this.productService.updateProduct(action.productId, action.product).pipe(
          map(product => {
            this.router.navigateByUrl('/');
            return updateProductSuccess({product});
          })
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProduct),
      switchMap(action =>
        this.productService.deleteProduct(action.productId).pipe(
          map(res => deleteProductSuccess({productId: res.id}))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private router: Router
  ) {}
}
