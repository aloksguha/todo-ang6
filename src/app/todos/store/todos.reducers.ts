import { Todo } from "./../todos.model";
import * as TodoActions from "./todos.actions";

const initialState = {
    todos : [
        new Todo(gererateId(),'Meet with dentist', false),
        new Todo(gererateId(), 'Repair Window', false),
        new Todo(gererateId(), 'Wash your car', true)
    ]
}
export function todoReducer(state = initialState, action: TodoActions.TodoActions){
    switch (action.type){
        case TodoActions.ADD_TODO : {
            return {
                ...state,
                todos : [...state.todos, action.payload]
            }
        }
        default : 
            return state;
        
    }
} 

export function gererateId(){
    return Math.random().toString(36).substring(7);
}
