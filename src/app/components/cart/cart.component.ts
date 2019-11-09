import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewInit {
  @ViewChild('typeAll', {static: false}) typeAll: ElementRef;
  @ViewChildren('input') inputs: QueryList<ElementRef>;

  isCheckedAll = true;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.isCheckedAll) {
      this.inputs.forEach(item => {
        item.nativeElement.checked = true;
      });
    }
  }

  get countOfProducts() {
    return this.inputs.length;
  }

  onChange() {
    const inputsChecked = this.inputs.filter( item => item.nativeElement.checked === true);

    if (inputsChecked.length !== this.countOfProducts) {
      this.isCheckedAll = false;
    } else {
      this.isCheckedAll = true;
    }
  }

  onCheckAll() {
    if (this.typeAll.nativeElement.checked) {
      this.inputs.forEach( item => {
        item.nativeElement.checked = true;
      });
    } else {
      this.inputs.forEach( item => {
        item.nativeElement.checked = false;
      });
    }
  }
}
