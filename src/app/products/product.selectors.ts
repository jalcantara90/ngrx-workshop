
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductState, productFeatureKey } from './product.reducer';

const selectProductState = createFeatureSelector<ProductState>(productFeatureKey);

export const selectProducts = createSelector(
  selectProductState,
  state => state.productList
);

export const selectNewProducts = createSelector(
  selectProducts,
  productList => productList.filter(product => product.isNew)
);

export const selectRecommendedProducts = createSelector(
  selectProducts,
  productList => productList.filter(product => product.isRecommended)
);

export const selectNewAmount = createSelector(
  selectNewProducts,
  productList => productList.length
);

export const loadingProducts = createSelector(
  selectProducts,
  productList => !!productList
);

export const selectedProduct = createSelector(
  selectProductState,
  state => state.selectedProduct
);
