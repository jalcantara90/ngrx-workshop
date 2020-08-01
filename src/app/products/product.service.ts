import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { pluck, map, shareReplay } from 'rxjs/operators';
import { IHttpPayload } from '../shared/http-payload.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly url = '/api/products';
  private product: Product;

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<IHttpPayload<Product>>(this.url).pipe(
      map(res => res.payload),
      shareReplay()
    );
  }

  updateProduct(productId: string, product: Product) {
    return this.http.put<Product>(this.url + '/' + productId, product);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.url, product);
  }

  deleteProduct(id: string) {
    return this.http.delete<{id: string}>(this.url + '/' + id);
  }

  set productSelected(product: Product) {
    this.product = product;
  }

  get productSelected() {
    return this.product;
  }
}
