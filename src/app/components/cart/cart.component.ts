import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/models/product';
import { FormatTextService } from '../../shared/services/format-text.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: Array<Product>;

  constructor(private service: ProductsService,
              private formatTextService: FormatTextService) {}

  ngOnInit() {
    this.products = this.service.getProductsInCart();
  }

  get countOfProducts() {
    return this.service.countProductsInCart;
  }

  get countOfCheckedProducts() {
    return this.products.filter(item => item.isChecked).length;
  }

  word(count) {
    return this.formatTextService.word(count);
  }

}
