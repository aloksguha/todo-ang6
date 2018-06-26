import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../../shared/todos.service';
import { Todo } from '../todos.model';
import { Store } from '@ngrx/store';
import * as todoActions from '../store/todos.actions';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  id;
  isCompleted;
  @ViewChild('f') slForm: NgForm;
  editMode = false;
  model : any = {};
  headinglable = "New Todo"
  constructor(private service: TodoService, 
    private store: Store<{todolist : {todos: Todo[]}}>) { }

  ngOnInit() {
    this.slForm.reset();
    this.service.editTodoSubject.subscribe(
      (todo: Todo) => {
        this.id = todo.id;
        this.isCompleted = todo.isCompleted;
        this.editMode = true;
        this.headinglable = "Update Todo"
        
        this.slForm.setValue({
          task : todo.task
        })
      }

    )

  }

  onAddTask(form: NgForm){
    if(this.editMode && form.valid){
      this.service.updateTodo(new Todo(this.id,form.value.task, this.isCompleted));
      this.editMode = false;
      this.headinglable = "New Todo"
    }
    else if(form.valid){
      this.store.dispatch(new todoActions.AddTodo())
      this.service.addTodo(form.value.task);
    }
    form.reset();
    
  }

}
