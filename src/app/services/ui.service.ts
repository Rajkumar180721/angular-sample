import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<boolean>();
  autoClose = new Subject<boolean>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggleAddTask(): Observable<boolean> {
    return this.subject.asObservable();
  }

  toggleAutoClose(state: boolean): void {
    this.autoClose.next(state);
  }
}
