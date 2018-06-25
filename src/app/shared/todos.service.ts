import { Todo } from "../todos/todos.model";
import { Subject } from "rxjs";

export class TodoService{
    constructor(){}

    todoSubject : Subject<Todo[]> = new Subject<Todo[]>();
    editTodoSubject : Subject<Todo> = new Subject<Todo>();

    todos : Todo[] = [
        new Todo(this.gererateId(),'Meet with dentist', false),
        new Todo(this.gererateId(), 'Repair Window', false),
        new Todo(this.gererateId(), 'Wash your car', true)
    ]

    getTodos(){
        return this.todos.slice();
    }

    getDoneTodos(){
        return this.todos.filter((td) => {
            return td.isCompleted
        }).slice();
    }

    addTodo(task: string){
        this.todos.push(new Todo(this.gererateId(), task, false));
        this.todoSubject.next(this.todos.slice());
    }

    getCompletedTodos(){
        return this.todos.slice();
    }

    makeTodoAsDoneorNotDone(todo: Todo){
        var exitingTodo = this.todos.find((td)=> {
            return td.id === todo.id;
        })
        console.log(exitingTodo);
        exitingTodo.isCompleted = exitingTodo.isCompleted ? false : true;
    }

    updateTodo(todo : Todo){
        var exitingTodo = this.todos.find((td)=> {
            return td.id === todo.id;
        })
        exitingTodo.isCompleted = todo.isCompleted;
        exitingTodo.task = todo.task; 
    }

    deleteTodo(id: string){
        this.todos = this.todos.filter((td) => {
            return td.id !== id;
        })
        this.todoSubject.next(this.todos.slice());
    }

    gererateId(){
        return Math.random().toString(36).substring(7);
    }



}