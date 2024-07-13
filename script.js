// Class representing a single task
class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }
}

// Class representing the To-Do list
class ToDoList {
    constructor() {
        this.tasks = [];
        this.render();
    }

    addTask(taskName) {
        if (taskName.trim()) {
            const task = new Task(taskName);
            this.tasks.push(task);
            this.render();
        }
    }

    toggleTask(index) {
        if (this.tasks[index]) {
            this.tasks[index].completed = !this.tasks[index].completed;
            this.render();
        }
    }

    deleteTask(index) {
        if (this.tasks[index]) {
            this.tasks.splice(index, 1);
            this.render();
        }
    }

    render() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';

        this.tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.className = task.completed ? 'completed' : '';

            taskItem.innerHTML = `
                <span onclick="toDoList.toggleTask(${index})">${task.name}</span>
                <button onclick="toDoList.deleteTask(${index})">Delete</button>
            `;

            taskList.appendChild(taskItem);
        });
    }
}

// Create a new To-Do list instance
const toDoList = new ToDoList();

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value;
    toDoList.addTask(taskName);
    taskInput.value = '';
}
