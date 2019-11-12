import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-check-all-box',
  templateUrl: './check-all-box.component.html',
  styleUrls: ['./check-all-box.component.scss']
})
export class CheckAllBoxComponent implements OnInit {

  constructor(private service: ProductsService) {}

  ngOnInit() {}

  get isChecked() {
    return this.service.isCheckedAllInCart;
  }

  get isDisable() {
    return this.service.getProductsInCart().length === 0;
  }

  onCheckAll() {
    this.service.toggleCheckAllProductsInCart();
  }

  onSpanCheck() {
    if (!this.isDisable) {
      this.onCheckAll();
    }
  }

}
