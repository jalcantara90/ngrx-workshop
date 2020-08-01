import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  private productId: string;

  form = this.fb.group({
    name: ['', [Validators.required]],
    price: [0, [Validators.required]],
    imgUrl: ['', [Validators.required]],
    isRecommended: [false],
    isNew: [true]
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.productService.productSelected) {
      const {id, ...product} = this.productService.productSelected;
      this.productService.productSelected = null;
      this.productId = id;
      this.form.setValue(product);
    }
  }

  saveProduct() {
    let method$: Observable<Product>;

    if (this.productId) {
      method$ = this.productService.updateProduct(this.productId, this.form.value);
    } else {
      method$ = this.productService.createProduct(this.form.value);
    }

    method$.subscribe(() => this.router.navigateByUrl('/'));
  }

}
