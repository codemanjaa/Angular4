export class Model{
    user;
    items;

    constructor(){
        this.user = "Mayura",
        this.items = [new TodoItem("Plan Business", false),
        new TodoItem("Buy premises", false),
        new TodoItem("Register", true)
        ]
    }
}

export class TodoItem{
    action;
    done;

    constructor(action, done){
        this.action = action;
        this.done = done;
    }
}
