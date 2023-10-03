import { Component } from '@angular/core';
import { Guid } from 'src/app/helpers/guid';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
text: string = '';
tasks: Array<Task> = [];

constructor() {
  this.load();  
}

save(): void {
  localStorage.setItem('tasks', JSON.stringify(this.tasks));
}

load(): void {
  let json = localStorage.getItem('tasks');
  if (json) {
    this.tasks = JSON.parse(json);
  }
}

addTask(): void {
  let newTask = {id:Guid.newGuid(), title:this.text};
  this.tasks.push(newTask);
  this.text = '';
  this.save();
}

removeTask(id: string): void {
  this.tasks = this.tasks.filter(x => x.id !== id);
  this.save();
}
}