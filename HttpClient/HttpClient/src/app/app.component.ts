import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <button (click)="onButtonClick()">Send</button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HttpClient';
  people:Array<Movie> = [];

  constructor(public httpClient: HttpClient) {
    
  }

 async onButtonClick() {
    this.people = (await this.httpClient.get('https://omdbapi.com/?s=Spiderman&apikey=5b9b7798').toPromise() as Response).Search;
   console.log(this.people);
  }
}

interface Movie {
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
  imdbID: string
}

interface Response {
  Search: Array<Movie>,
  totalResults: string,
  Response: string
}
