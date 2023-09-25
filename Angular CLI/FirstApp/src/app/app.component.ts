import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My First Angular App';
  helperText = 'Help text';
  isAdmin: boolean = true;
currentColor: Color = Color.Red;
Color = Color;
products: Array<string> = ['banan', 'apple', 'orange'];
size: number = 10;

classes: any = {
  "consolas": this.isAdmin,
  "underline-text": this.isAdmin,
  "red-text": !this.isAdmin
};

styles: any = {
  "color": "green",
  "background-color": "red"
}

  onButtonClick(): void {
    this.title = 'Vladimir';
    this.isAdmin = !this.isAdmin;
    this.size += 5;

    this.classes = {
      "consolas": this.isAdmin,
      "underline-text": this.isAdmin,
      "red-text": !this.isAdmin
    }

      this.styles = {
        "color": "red",
        "background-color": "green"
      }
  }

  onNumberClick(num: number): void {
    this.title = this.products[num];
  }
}

enum Color {
  Red,
  Green,
  Blue
}