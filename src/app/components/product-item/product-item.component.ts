import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit, DoCheck {
  @Input() product: Product;
  @Output() changed: EventEmitter<Product>;
  @Input() isChecked: boolean;

  constructor() {
    this.changed = new EventEmitter<Product>();
  }

  ngOnInit() {
    this.isChecked = this.product.isChecked;
  }

  ngDoCheck(): void {
  }

  onChange() {
    this.changed.emit(new Product(this.product.id,
      this.product.title, this.product.price, !this.product.isChecked, this.product.isInCart));
  }

  onSpanChange() {
    this.onChange();
  }

}
