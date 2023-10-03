import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Guid } from 'src/app/helpers/guid';
import { Task } from 'src/app/models/task';
import { TaskRepositoryService } from 'src/app/services/task-repository.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [TaskRepositoryService]
})
export class ListComponent implements OnInit, OnChanges, OnDestroy {
  //text: string = '';
  
  
  constructor(public taskRepository: TaskRepositoryService) {
     
  }
  ngOnInit(): void {
    this.taskRepository.load(); 
  }
  
  ngOnChanges(changes: SimpleChanges): void
  {
    
  }
  ngOnDestroy(): void {
    
  }
  
  addTask(taskName: string): void {
    this.taskRepository.addTask(taskName);
  }

  removeTask(task: Task): void {
    this.taskRepository.removeTask(task);
  }
  
  // addTask(): void {
  //   let newTask = {id:Guid.newGuid(), title:this.text};
  //   this.tasks.push(newTask);
  //   this.text = '';
  //   this.save();
  // }
  
  
  // removeTask(id: string): void {
  //   this.tasks = this.tasks.filter(x => x.id !== id);
  //   this.save();
  // }
  
}
