export class Todo {
    id : string;
    task : string;
    isCompleted : boolean;

    constructor(id: string, task: string, isCompleted: boolean){
        this.id = id;   
        this.task = task;
        this.isCompleted = isCompleted;
    }
}