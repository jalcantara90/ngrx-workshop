import { createAction, props } from '@ngrx/store';
import { Product } from './product.model';

export const getProducts = createAction(
  '[Products] - get Product list'
);

export const getProductsSuccess = createAction(
  '[Products] - get Products list success',
  props<{data: Product[] }>()
);

export const getProductsFailure = createAction(
  '[Products] - get product list failure',
  props<{ error: any }>()
);

export const createProduct = createAction(
  '[Products Form] - create product',
  props<{ product: Product }>()
);

export const createProductSuccess = createAction(
  '[Products Form] - create Product success',
  props<{ product: Product }>()
);

export const createProductFailure = createAction(
  '[Products Form] - create Product failure',
  props<{ error: any }>()
);

export const unSelectProduct = createAction(
  '[Product Form] - un select product'
);

export const selectProductToUpdate = createAction(
  '[Product] - select update product',
  props<{ product: Product }>()
);

export const updateProduct = createAction(
  '[Product] - update product',
  props<{ productId: string, product: Product }>()
);

export const updateProductSuccess = createAction(
  '[Products Form] - update product Success',
  props<{ product: Product }>()
);

export const updateProductFailure = createAction(
  '[Products Form] - update Product failure',
  props<{ error: any }>()
);

export const deleteProduct = createAction(
  '[Product] - delete product',
  props<{ productId: string }>()
);

export const deleteProductSuccess = createAction(
  '[Products Form] - delete product Success',
  props<{ productId: string }>()
);

export const deleteProductFailure = createAction(
  '[Products Form] - delete Product failure',
  props<{ error: any }>()
);
