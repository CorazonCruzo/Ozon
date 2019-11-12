import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductsService } from '../../shared/services/products.service';
import { FormatTextService } from '../../shared/services/format-text.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() id: string;
  private product: Product;
  private isLoading: boolean;
  @Input() last;
  @Input() index;
  @Input() isCatalogPage: boolean;

  constructor(private service: ProductsService,
              private formatNumberService: FormatTextService
              ) {
    this.isLoading = false;
  }

  ngOnInit() {
    this.product = this.service.getItem(this.id);
  }

  onChange() {
    this.service.toggleCheckProp(this.id);
  }

  onSpanChange() {
    this.onChange();
  }

  async toggleStateInCart() {
    this.isLoading = true;
    await this.service.toggleIsInCartProp(this.product.id);
    this.isLoading = false;
  }

  getPrice(price) {
    return this.formatNumberService.formatNumber(price);
  }

  getPriceWithDiscount(id, price) {
    return this.formatNumberService.formatNumber(price - this.service.getDiscountSumOfItem(id));
  }
}
