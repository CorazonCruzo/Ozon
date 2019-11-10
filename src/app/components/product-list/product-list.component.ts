import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductsService} from '../../shared/services/products.service';
import {Product} from '../../shared/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Array<Product>;
  @Output() changed: EventEmitter<Product>;

  constructor() {
    this.changed = new EventEmitter<Product>();
  }

  ngOnInit() {
  }

  onChange(product) {
    this.changed.emit(product);
  }

}
