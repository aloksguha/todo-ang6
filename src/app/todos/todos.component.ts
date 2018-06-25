import { Component, OnInit } from '@angular/core';
import { Todo } from './todos.model';
import { TodoService } from '../shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos :Todo[] = [];
  constructor(private service : TodoService) { }

  ngOnInit() {
    this.todos = this.service.getTodos();
    this.service.todoSubject.subscribe(
      (todos) => {
        this.todos = todos;
      }
    )
  }

}
