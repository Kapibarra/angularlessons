import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core'

export interface Todo {
  completed: boolean;
  title: string;
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

constructor(private http: HttpClient) {}

todos: Todo[] = [];

  ngOnInit() {
this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
.subscribe(todos => {
  console.log(todos);
  this.todos = todos;
  
})
  }
}

