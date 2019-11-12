import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() isCatalogPage: boolean;

  constructor(private service: ProductsService) {}

  ngOnInit() {}

  get products() {
    if (!this.isCatalogPage) {
      return this.service.getProductsInCart();
    } else {
      return this.service.getProducts();
    }
  }
}
