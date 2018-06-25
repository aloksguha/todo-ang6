import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { DoneTodoComponent } from './todos/done-todo/done-todo.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'donetodo', component: DoneTodoComponent },
  { path: '', component: TodosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
