import { Injectable } from '@angular/core';

@Injectable()
export class MathService {

  constructor() { }

  pow(base: number, exp: number) {
    if (exp === 0) {
      return 1;
    } else if (exp < 0) {
      return this.pow(1 / base, -exp);
    } else {
      let result = base;
      for (var i =1; i<exp;++i) {
        result *= result;
      }
      return result;
    }
  }

}
