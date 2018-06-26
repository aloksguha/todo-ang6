import { Component, OnInit } from '@angular/core';
import { Todo } from './todos.model';
import { TodoService } from '../shared/todos.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todosState : Observable<{todos : Todo[]}>;
  constructor(private service : TodoService,
    private store: Store<{todolist : {todos: Todo[]}}>) { }

  ngOnInit() {
    // this.todos = this.service.getTodos();
    this.todosState = this.store.select('todolist');
    // this.service.todoSubject.subscribe(
    //   (todos) => {
    //     this.todos = todos;
    //   }
    // )
  }

}
