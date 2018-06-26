import { Action } from "@ngrx/store";
import { Todo } from "../todos.model";
export const ADD_TODO = "ADD_TODO";

export class AddTodo implements Action{
    readonly type = ADD_TODO;
    // payload : Todo;

    constructor(private todo: Todo){}
}


export type TodoActions = AddTodo;