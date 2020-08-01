import * as express from 'express';
import {Application} from 'express';
import {loginUser} from './auth.route';
import { getAllProducts } from './get-products';
import { createProduct } from './create-product.route';
import { deleteProduct } from './delete-product.route';
import { updateProduct } from './update-product.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/login').post(loginUser);

app.route('/api/products').get(getAllProducts);
app.route('/api/products').post(createProduct);
app.route('/api/products/:id').delete(deleteProduct);
app.route('/api/products/:id').put(updateProduct);

const httpServer: any = app.listen(
  9000,
  () => console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port)
);




