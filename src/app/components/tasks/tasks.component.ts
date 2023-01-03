import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task-service.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }
  
  ngOnInit(): void {
    this.taskService.getTask().subscribe(res => this.tasks = res.tasks)
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => { 
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    })
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  newTask(task: Task) {
    this.taskService.addTask(task).subscribe(res => {
      console.log(res.tasks);
      if (res.tasks[0])
        this.tasks.push(res.tasks[0])
    })
  }
}
