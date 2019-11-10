export class Product {
  constructor(
    public id: string,
    public title: string,
    public price: number,
    public isChecked: boolean = false,
    public isInCart: boolean = false
  ) {}
}
