import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {

  text: string = 'Empty';
  result: number = 0;
  num1: number = 0;
  num2: number = 0;
  operator: string = '+';
  onTextClick(): void {
    this.text = 'Vladimir';
    //console.log(this.text);
  }

onCalc() {
  setTimeout(() => {
    console.log('DAAAAAAAAA');
    
    switch (this.operator) {
      case '+': this.result = this.num1 + this.num2; break;
      case '-': this.result = this.num1 - this.num2; break;
      case '*': this.result = this.num1 * this.num2; break;
      case '/': this.result = this.num1 / this.num2; break;
    }
  }, 2000);
}

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
