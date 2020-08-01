import {Request, Response} from 'express';
import { PRODUCTS } from './db-data';

export function deleteProduct(req: Request, res: Response) {

  console.log('Deleting course ...');

  const id = req.params.id;
  const index = PRODUCTS.findIndex((product => product.id === id));

  PRODUCTS.splice(index, 1);
  setTimeout(() => res.status(200).json({id}), 2000);
}
