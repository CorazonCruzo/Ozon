import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePipe'
})
export class PricePipe implements PipeTransform {
  number;

  transform(number: any, ...args: any[]): any {
    this.number = number.toString().split(' ');
    const parse = this.number.join('');

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
          const rest = this.number.splice(0).join('');
          resultNumber.unshift(rest);
        }
      }
      return resultNumber.join(' ');
    }
  }

}
