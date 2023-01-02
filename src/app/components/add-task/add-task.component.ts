import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  autoClose: boolean = true;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.uiService.onToggleAddTask().subscribe(value => this.showAddTask = value);
    this.uiService.autoClose.subscribe(value => this.autoClose = value);
  }

  submitForm(): void {
    if (!this.text) {
      alert('Enter the task title')
      return
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;

    if (this.autoClose)
      this.uiService.toggleAddTask();
  }
  
}
