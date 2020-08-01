import { PRODUCTS } from './db-data';

import {Request, Response} from 'express';

export function getAllProducts(req: Request, res: Response) {

  // console.log("Retrieving courses data ...");

  setTimeout(() => {

    res.status(200).json({payload: PRODUCTS });

  }, 1000);
};
