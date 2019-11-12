export class Product {
  public id: string;
  public title: string;
  public image: string;
  public price: number;
  public isChecked: boolean;
  public isInCart: boolean;
  public discount: number;
  public rating: number;

  constructor({id, title, image, price, isChecked = true, isInCart = false, discount = 0, rating = 4}) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.price = price;
    this.isChecked = isChecked;
    this.isInCart = isInCart;
    this.discount = discount;
    this.rating = rating;
  }
}
