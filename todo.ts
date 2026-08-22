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

function deleteTask(id: number): void{
    const taskIndex = tasks.findIndex(task => task.id === id);
    if(taskIndex !== -1){
        const deletedTask = tasks.splice(taskIndex, 1)[0];
        console.log(`Task deleted: ${deletedTask.title}`);
    }else{
        console.log(`Task with id: ${id} not found`);
    }
}

function updateTask(id: number, newTitle: string): void{
    const task = tasks.find(task => task.id === id);   
    if(task){
        task.title = newTitle;
        console.log(`Task updated: ${task.title}`);
    }else{
        console.log(`Task with id: ${id} not found`);
    }
}   

deleteTask(2);
updateTask(1, "Learn TypeScript and Github");
listTasks();