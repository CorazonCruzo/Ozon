import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ProductsService} from '../../shared/services/products.service';
import {Product} from '../../shared/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewInit {
  @ViewChild('typeAll', {static: false}) typeAll: ElementRef;
  @ViewChild('deleteChecked', {static: false}) deleteChecked: ElementRef;
  @ViewChildren('input') inputs: QueryList<ElementRef>;
  private isChecked: boolean;
  public products: Array<Product>;
  private checkedIds: Array<string>;

  constructor(private service: ProductsService) {
  }

  ngOnInit() {
    this.isChecked = false;
    this.products = this.service.getProducts();
    this.checkedIds = [];
  }

  ngAfterViewInit() {
    if (this.isCheckedAll) {
      this.inputs.forEach(item => {
        item.nativeElement.checked = true;
      });
    }
  }

  get countOfProducts() {
    return this.products.length;
  }

  onChange(product: Product) {
    this.service.changeProducts(product);
    this.products = this.service.getProducts();
    if (product.isChecked) {
      this.checkedIds.push(product.id);
    } else {
      this.checkedIds = this.checkedIds.filter(item => item !== product.id);
    }
  }

  onCheckAll(isChecked) {
    this.service.toggleSelection(isChecked);
    this.products = this.service.getProducts();
    if (isChecked) {
      this.checkedIds = this.products.map(item => item.id);
    } else {
      this.checkedIds = [];
    }
  }

  get isCheckedAll() {
    let result = true;
    if (this.products.length === 0) {
      console.log('tut');
      console.log(this.products);
      result = false;
    } else {
      if (!this.products.every(item => item.isChecked)) {
        result = false;
      }
    }
    return result;
  }

  onDeleteChecked() {
    this.service.deleteByIdList(this.checkedIds);
    this.products = this.service.getProducts();
  }

  get discount() {
    let sum = 0;
    for (let i = 0; i < this.products.length; i++) {
      sum += this.products[i].price;
    }
    return (this.service.calculateDiscount(sum) / 100.0) * sum;
  }

  get price() {
    return this.products.reduce((sum, curr) => {
      return sum + curr.price;
    }, 0);
  }

  get word() {
    switch (this.countOfProducts % 10) {
      case 0:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        return 'товаров';
        break;
      case 1:
        switch (this.countOfProducts % 100) {
          case 11:
            return 'товаров';
            break;
          default:
            return 'товар';
        }
        break;
      case 2:
        switch (this.countOfProducts % 100) {
          case 12:
            return 'товаров';
            break;
          default:
            return 'товара';
        }
        break;
      case 3:
        switch (this.countOfProducts % 100) {
          case 13:
            return 'товаров';
            break;
          default:
            return 'товара';
        }
        break;
      case 4:
        switch (this.countOfProducts % 100) {
          case 14:
            return 'товаров';
            break;
          default:
            return 'товара';
        }
        break;
    }
  }

}
