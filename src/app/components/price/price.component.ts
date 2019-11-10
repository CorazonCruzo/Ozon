import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  @Input() discount: number;
  @Input() price: number;
  @Input() countOfProducts: number;
  @Input() word: string;

  constructor() {
  }

  ngOnInit() {
  }


}
