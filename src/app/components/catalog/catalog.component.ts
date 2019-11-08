import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  number;
  constructor() { }

  ngOnInit() {
  }

  pricePipe(number) {
    this.number = number.split(' ');
    let parse = this.number.join('');

    if(parse < 10000) {
      return parse;
    } else {
      this.number = parse.split('');
      let resultNumber = [];
      for (let i = 0; i < this.number.length; i++) {
        let slicedNumbers = this.number.slice(-3);
        this.number.splice(this.number.length - 3, 3);
        resultNumber.unshift(slicedNumbers.join(''));

        if(this.number.length < 3 && this.number.length != 0) {
          let rest = this.number.splice(0).join('');
          resultNumber.unshift(rest);
        }
      }
      return resultNumber.join(' ');
    }
  }

}
