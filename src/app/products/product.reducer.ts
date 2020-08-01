
import { createReducer, on } from '@ngrx/store';
import * as fromProductAction from './product.actions';
import { Product } from './product.model';

export const productFeatureKey = 'product';

export interface ProductState {
  productList: Product[];
  selectedProduct: Product;
  error: any;
}

const initialState: ProductState = {
  productList: [],
  selectedProduct: null,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(fromProductAction.getProductsSuccess, (state, action) => {
    return {
      ...state,
      productList: [...action.data]
    };
  }),
  on(fromProductAction.getProductsFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(fromProductAction.createProduct, (state, action) => {
    return {
      ...state,
      productList: [action.product, ...state.productList]
    };
  }),
  on(fromProductAction.createProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(fromProductAction.updateProductSuccess, (state, action) => {
    return {
      ...state,
      productList: state.productList
        .map(product => product.id === action.product.id ? action.product : product)
    };
  }),
  on(fromProductAction.deleteProductSuccess, (state, action) => {
    return {
      ...state,
      productList: state.productList.filter(product => product.id !== action.productId)
    };
  }),
  on(fromProductAction.selectProductToUpdate, (state, action) => {
    return {
      ...state,
      selectedProduct: action.product
    };
  }),
  on(fromProductAction.unSelectProduct, (state) => {
    return {
      ...state,
      selectedProduct: null
    };
  })
);

