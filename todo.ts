//simple todo list app

type Task = {
    id: number;
    title: string;
    completed: boolean;
}

let tasks: Task[] = [];

function addTask(title: string): void {
    const newtask: Task = {
        id: tasks.length + 1,
        title,
        completed: false
    };
    tasks.push(newtask);
    console.log(`Task added: ${title}`);
}

function listTasks(): void {
    console.log("Todo List:");  
    tasks.forEach(task => {
        console.log(`- [${task.completed ? 'Task Completed' : 'Task Pending'}] ${task.title}`);
    });
}

addTask("Learn TypeScript");
addTask("Learn Github");
listTasks();

function completeTask(id: number): void{
    const task = tasks.find(task =>task.id ===id);
    if(task){
        task.completed = true;
        console.log(`Task completed: ${task.title}`);
    }else{
        console.log(`Task with id:  ${id} not found`);
    }
}

completeTask(1);
listTasks();