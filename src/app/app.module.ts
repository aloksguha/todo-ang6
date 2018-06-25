import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './shared/todos.service';
import { HeaderComponent } from './header/header.component';
import { TodoCardComponent } from './todos/todo-card/todo-card.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { DoneTodoComponent } from './todos/done-todo/done-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeaderComponent,
    TodoCardComponent,
    TodoEditComponent,
    DoneTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
