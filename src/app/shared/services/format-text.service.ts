import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatTextService {

  constructor() {}

  formatNumber(numberValue) {
    let result = '';
    if (Math.floor(numberValue) === numberValue) {
      result = this.formatIntPart(numberValue);
    } else {
      const drCh = (numberValue.toFixed(2) + '').split('.')[1];
      result = this.formatIntPart(Math.floor(numberValue)) + ',' + drCh;
    }

    return result;
  }

  formatIntPart(numberValue: number): string {
    let result = '';
    if (numberValue >= 10000) {
      while (numberValue > 0) {
        const rest = numberValue % 1000;
        numberValue = Math.floor(numberValue / 1000);
        let restString = '';

        if ((rest >= 100) || numberValue === 0) {
          restString = '' + rest;
        } else if (rest >= 10) {
          restString = '0' + rest;
        } else {
          restString = '00' + rest;
        }

        result = restString + ' ' + result;
      }
    } else {
      result = numberValue + '';
    }
    result = result.trim();
    return result;
  }

  word(count) {
    switch (count % 10) {
      case 0:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        return 'товаров';
        break;
      case 1:
        switch (count % 100) {
          case 11:
            return 'товаров';
            break;
          default:
            return 'товар';
        }
        break;
      case 2:
        switch (count % 100) {
          case 12:
            return 'товаров';
            break;
          default:
            return 'товара';
        }
        break;
      case 3:
        switch (count % 100) {
          case 13:
            return 'товаров';
            break;
          default:
            return 'товара';
        }
        break;
      case 4:
        switch (count % 100) {
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
