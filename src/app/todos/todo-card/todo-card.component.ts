import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todos.model';
import { TodoService } from '../../shared/todos.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {
  @Input() todo : Todo;
  @Input() doneFlag : boolean;
  constructor(private service: TodoService) { }

  ngOnInit() {
    console.log(this.todo);
  }

  onchange(){
    this.service.makeTodoAsDoneorNotDone(this.todo);
  }

  onTodoClick(){
    this.service.editTodoSubject.next(this.todo);
  }

  deleteTodo(){
    this.service.deleteTodo(this.todo.id);
  }
}
