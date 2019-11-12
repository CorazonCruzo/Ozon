import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { FormatTextService } from '../../shared/services/format-text.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public isCatalogPage = true;

  constructor(private service: ProductsService,
              private formatTextService: FormatTextService) {}

  ngOnInit() {}

  get countOfProducts() {
    return this.service.countProductsInCart;
  }

  word(count) {
    return this.formatTextService.word(count);
  }

}
