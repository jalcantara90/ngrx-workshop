import { PRODUCTS } from './db-data';
import {Request, Response} from 'express';
import * as faker from 'faker';

export function createProduct(req: Request, res: Response) {
  console.log("Creating new Product ...");
  const changes = req.body;
  const newProduct = {
    id: faker.random.uuid(),
    ...changes
  };

  PRODUCTS.push(newProduct);
  setTimeout(() => res.status(200).json(newProduct), 2000);
}
