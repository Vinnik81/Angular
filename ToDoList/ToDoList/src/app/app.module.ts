import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './components/item/item.component';
import { FormComponent } from './components/form/form.component';
import { TaskRepositoryService } from './services/task-repository.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    FormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    TaskRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
