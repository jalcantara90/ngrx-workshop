import {Request, Response} from 'express';
import { PRODUCTS } from './db-data';
import { Product } from '../src/app/products/product.model';

export function updateProduct(req: Request, res: Response) {
  console.log('Creating new Product ...');
  const id = req.params.id;
  const product = req.body;
  product.id = id;
  const index = PRODUCTS.findIndex(((product: Product) => product.id === id));

  PRODUCTS.splice(index, 1, product);
  setTimeout(() => res.status(200).json(product), 2000);
}
