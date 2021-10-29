export default class Task {
    constructor(name, isDone = false){
        this.id = Task.id;
        this.name = name;
        this.isDone = isDone;
        Task.id ++;
    }

    static id = 0;
}