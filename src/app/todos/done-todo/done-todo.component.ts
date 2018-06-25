import { Component, OnInit } from '@angular/core';
import { Todo } from '../todos.model';
import { TodoService } from '../../shared/todos.service';

@Component({
  selector: 'app-done-todo',
  templateUrl: './done-todo.component.html',
  styleUrls: ['./done-todo.component.css']
})
export class DoneTodoComponent implements OnInit {
  todos :Todo[] = [];
  constructor(private service : TodoService) { }

  ngOnInit() {
    this.todos = this.service.getDoneTodos();
    this.service.todoSubject.subscribe(
      (todos) => {
        this.todos = todos.filter(
          (todo) =>{
            return todo.isCompleted;
          } 
        )
      }
    )
  }
}
