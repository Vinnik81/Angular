import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent { 
  num1: number = 0;
  num2: number = 0;
  operator: string = '+';
  operations: Array<string> = ['+', '-', '*', '/'];
  onTextClick(): void {

  }

  get result(): number {
    switch (this.operator) {
            case '+': return this.num1 + this.num2;
            case '-': return this.num1 - this.num2;
            case '*': return this.num1 * this.num2;
            case '/': return this.num1 / this.num2;
          }
          return 0;
  }

// onCalc() {  
//     switch (this.operator) {
//       case '+': this.result = this.num1 + this.num2; break;
//       case '-': this.result = this.num1 - this.num2; break;
//       case '*': this.result = this.num1 * this.num2; break;
//       case '/': this.result = this.num1 / this.num2; break;
//     }
// }

  // onKeyUp(event: any): void {
  //   // console.log('-------------------------------');
  //   // console.log();
  //   // console.log('-------------------------------');
  //   // console.log(event);
  //   this.text = event.target.value;
  // }

  // onKeyUp(str: string): void {
    
  //   this.text = str;
  // }


}
