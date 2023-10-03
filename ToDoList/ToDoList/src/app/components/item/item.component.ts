import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
@Input() item:Task = {id:'', title:''};
@Output() removed:EventEmitter<Task> = new EventEmitter<Task>();

removeTask(id: string): void {
  console.log(id);
  this.removed.emit(this.item);
}
}
