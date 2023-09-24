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

  onButtonClick(): void {
    this.title = 'Vladimir';
  }
}

enum Color {
  Red,
  Green,
  Blue
}