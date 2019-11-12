import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { FormatTextService } from '../../shared/services/format-text.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  @Input() word: string;

  constructor(private service: ProductsService,
              private formatNumberService: FormatTextService
              ) {}

  ngOnInit() {}

  onSubmit() {
    this.service.getCheckedProductsInCart();
  }

  get price() {
    return this.formatNumberService.formatNumber(this.service.getPriceOfProducts());
  }

  get discount() {
    return this.formatNumberService.formatNumber(this.service.getDisountOfProducts());
  }

  get totalPrice() {
    return this.formatNumberService.formatNumber(this.service.getTotalPriceOfProducts());
  }

  get countOfCheckedProducts() {
    return this.service.countOfCheckedProducts();
  }

}
