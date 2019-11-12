import { Inject, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Array<Product>;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.products = [
      new Product(
        {
          id: '1',
          title: 'Кофе в зернах нефть Бразилия Морджиана в металлической тубе, 350 гр',
          image: 'brazil',
          price: 1470.34389,
          discount: 13
        }
      ),
      new Product(
        {
          id: '2',
          title: 'Кофе в зернах Коста-Рика в металлической тубе, 350 гр',
          image: 'costa-rica',
          price: 2532.77
        }
      ),
      new Product(
        {
          id: '3',
          title: 'Кофе в зернах Колумбия без кофеина в металлической тубе',
          image: 'decaf',
          price: 1550,
          discount: 30,
          rating: 5
        }
      ),
      new Product(
        {
          id: '4',
          title: 'Кофе в зернах нефть Эфиопия в металлической тубе, 350 гр',
          image: 'ethiopia',
          price: 2460
        }
      ),
      new Product(
        {
          id: '5',
          title: 'Кофе в зернах нефть Куба в металлической тубе',
          image: 'cuba',
          price: 1300,
          discount: 14.6
        }
      ),
      new Product(
        {
          id: '6',
          title: 'Кофе в зернах нефть Гондурас в металлической тубе, 350 гр',
          image: 'honduras',
          price: 360,
          discount: 15
        }
      ),
      new Product(
        {
          id: '7',
          title: 'Кофе в зернах нефть Мексика в металлической тубе, 350 гр',
          image: 'mexico',
          price: 660,
          rating: 5
        }
      ),
      new Product(
        {
          id: '8',
          title: 'Кофе в зернах нефть Никарагуа в металлической тубе, 350 гр',
          image: 'nicaragua',
          price: 770
        }
      ),
      new Product(
        {
          id: '9',
          title: 'Кофе в зернах нефть Перу в металлической тубе, 350 гр',
          image: 'peru',
          price: 1313
        }
      ),
      new Product(
        {
          id: '10',
          title: 'Кофе в зернах нефть Колумбийский самый вкусный Киндио в металлической тубе, 350 гр',
          image: 'colombia-huila',
          price: 100,
          rating: 4.6
        }
      )
    ];

    let cartState = this.storage.get('cartState');
    if (cartState) {
      cartState.forEach(item => {
        const element = this.products.find(elem => elem.id === item.id);
        element.isChecked = item.isChecked;
        element.isInCart = item.isInCart;
      });
    }
  }

  getProducts() {
    return this.products;
  }

  getProductsInCart() {
    return this.products.filter(item => item.isInCart);
  }

  async getCheckedProductsInCart() {
    console.log('Список товаров',this.products.filter(item => item.isInCart && item.isChecked));
    this.checkAllProductsInCart(false);
    await this.updateStorageState();
  }

  get countProductsInCart() {
    return this.getProductsInCart().length;
  }

  async toggleSelection(marker: boolean) {
    if (marker) {
      this.getProductsInCart().forEach(item => item.isChecked = true);
    } else {
      this.getProductsInCart().forEach(item => item.isChecked = false);
    }
    await this.updateStorageState();
  }

 async deleteChecked() {
    this.getProductsInCart().forEach(item => {
      if (item.isChecked) {
        item.isChecked = true;
        item.isInCart = false;
      }
    });
    await this.updateStorageState();
  }

  getPriceOfProducts() {
    return this.products.filter(item => item.isInCart && item.isChecked).reduce((sum, item) => sum += item.price, 0);
  }

  getDisountOfProducts() {
    return this.products.filter(item => item.isInCart && item.isChecked).reduce((sum, item) => sum += this.getDiscountSumOfItem(item.id), 0);
  }

  getTotalPriceOfProducts() {
    return this.getPriceOfProducts() - this.getDisountOfProducts();
  }

  getDiscountSumOfItem(id: string) {
    const product = this.getItem(id);
    return product.price * product.discount / 100.0;
  }

  async changeCheckProp(id: string, marker: boolean) {
    const product = this.getItem(id);
    product.isChecked = marker;
    await this.updateStorageState();
  }

  async toggleCheckProp(id: string) {
    const product = this.getItem(id);
    await this.changeCheckProp(id, !product.isChecked);
  }

  async changeIsInCartProp(id: string, marker: boolean) {
    const product = this.products.find(item => item.id === id);
    product.isInCart = marker;
    product.isChecked = !marker ? true : product.isChecked;
    await this.updateStorageState();
  }

  async toggleIsInCartProp(id: string) {
    const product = this.products.find(item => item.id === id);
    await this.changeIsInCartProp(id, !product.isInCart);
  }

  getItem(id: string) {
    return this.getProducts().find(item => item.id === id);
  }

  countOfCheckedProducts() {
    return this.getProductsInCart().filter(item => item.isChecked).length;
  }

  get isCheckedAllInCart() {
    return this.getProductsInCart().every(item => item.isChecked);
  }

  async checkAllProductsInCart(marker: boolean) {
    this.getProductsInCart().forEach(item => item.isChecked = marker);
    await this.updateStorageState();
  }

  toggleCheckAllProductsInCart() {
    this.checkAllProductsInCart(!this.isCheckedAllInCart);
  }

  updateStorageState() {

    return new Promise(resolve => {
      setTimeout(() => {
        const stateArr = this.getProductsInCart().map(item => ({
          id: item.id, isChecked: item.isChecked,
          isInCart: item.isInCart
        }));
        this.storage.set('cartState', stateArr);
        resolve(true);
      }, 1000);
    });
  }
}
