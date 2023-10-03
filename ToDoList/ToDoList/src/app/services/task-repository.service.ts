import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Guid } from '../helpers/guid';

@Injectable({
  providedIn: 'root'
})
export class TaskRepositoryService {
 private _tasks: Array<Task> = [];

  constructor() { }

  get tasks(): ReadonlyArray<Task> {
    let array: ReadonlyArray<Task> = this._tasks;
    return array;
  }

  save(): void {
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
  }
  
  load(): void {
    let json = localStorage.getItem('tasks');
    if (json) {
      this._tasks = JSON.parse(json);
    }
  }

  addTask(taskName: string): void {
    let newTask = {id:Guid.newGuid(), title:taskName};
    this._tasks.push(newTask);
    this.save();
  }

  removeTask(task:Task){
    this._tasks = this.tasks.filter((x) => x != task);
     this.save();
   }
}
