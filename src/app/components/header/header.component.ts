import { Component } from '@angular/core';


import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  autoClose: boolean = false;

  constructor(private uiServie: UiService) {
    this.uiServie.onToggleAddTask().subscribe(value => {
      this.showAddTask = value;
    })
  }

  toogleAddTask(): void {
    this.uiServie.toggleAddTask();
  }

  toggleAutoClose(): void {
    this.autoClose = !this.autoClose;
    this.uiServie.toggleAutoClose(this.autoClose);
  }
}
