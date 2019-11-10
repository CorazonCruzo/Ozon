import {Injectable} from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: Array<Product>;


  constructor() {
    this.products = [
      new Product('1', 'Машина', 1000, false, true),
      new Product('2', 'Ручка', 25000, false, true),
      new Product('3', 'Ножка', 15050, false, true),
      new Product('4', 'Кофе', 30660, false, true),
      new Product('5', 'Печенье', 100, false, true),
    ];
  }

  getProducts() {
    return this.products.filter(item => item.isInCart);
  }

  get countProductsInCart() {
    return this.getProducts().length;
  }

  changeProducts(product: Product) {
    // this.products = this.products.map(item => {
    //   if (item.id !== product.id) {
    //     return item;
    //   } else {
    //     return new Product(product.id, product.title, product.price, product.isChecked, product.isInCart);
    //   }
    // });

    this.products.forEach(item => {
      if (item.id === product.id) {
        item.title = product.title;
        item.price = product.price;
        item.isChecked = product.isChecked;
        item.isInCart = product.isInCart;
      }
    });
  }

  toggleSelection(marker: boolean) {
    if (marker) {
      this.getProducts().forEach(item => item.isChecked = true);
    } else {
      this.getProducts().forEach(item => item.isChecked = false);
    }
  }

  deleteByIdList(listId: Array<string>) {
    listId.forEach(id => {
      this.products.forEach(item => {
        if (item.id === id) {
          item.isInCart = false;
        }
      });
    });
  }

  calculateDiscount(sum: number): number {
    if ((sum >= 10000) && (sum < 15000)) {
      return 5;
    } else if ((sum >= 15000) && (sum < 20000)) {
      return 10;
    } else if (sum >= 20000) {
      return 15;
    } else {
      return 0;
    }
  }
}
