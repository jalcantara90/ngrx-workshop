import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Input() isUserLogged: boolean;
  @Output() editProduct: EventEmitter<Product> = new EventEmitter();
  @Output() deleteProduct: EventEmitter<string> = new EventEmitter();

  constructor() { }
}
