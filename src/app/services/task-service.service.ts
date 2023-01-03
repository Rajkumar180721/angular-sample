import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

type responseModel = {
  status: string,
  tasks: Task[]
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = 'http://localhost:5000/tasks';

  
  constructor(private http:HttpClient) {}

  getTask(): Observable<responseModel> {
    return this.http.get<responseModel>(this.url);
  }

  deleteTask(task: Task): Observable<responseModel> {
    const url = this.url+'/'+task.id;
    return this.http.delete<responseModel>(url);
  }

  updateTaskReminder(task: Task): Observable<responseModel> {
    const url = this.url;
    return this.http.put<responseModel>(url, {task}, httpOptions);
  }

  addTask(task: Task): Observable<responseModel> {
    return this.http.post<responseModel>(this.url, {task}, httpOptions);
  }
}