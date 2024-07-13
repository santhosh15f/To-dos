### Index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Work-To-Do</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color:black;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            background-color:red;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
        }
        .add-task {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }
        .add-task input {
            flex: 1;
            padding: 10px;
            margin-right: 10px;
            border: 1px solid #ccc;
        }
        .add-task button {
            padding: 10px;
            background-color:gray;
            color: #fff;
            border: none;
            cursor: pointer;
        }
        .add-task button:hover {
            background-color:bisque;
        }
        .tasks {
            list-style: none;
            padding: 0;
        }
        .tasks li {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            background-color: #f9f9f9;
            margin-bottom: 10px;
            border: 1px solid #ccc;
        }
        .tasks li.completed {
            text-decoration: line-through;
            color: #888;
        }
        .tasks li button {
            background-color: red;
            color: #fff;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Work-To-Do</h1>
        <div class="add-task">
            <input type="text" id="taskInput" placeholder="Add a new task">
            <button onclick="addTask()">Add Task</button>
        </div>
        <ul class="tasks" id="taskList"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
### Script.js
```
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
```
### Output
![Screenshot (46)](https://github.com/Amrish-K/to-do-list/assets/130633944/acd55350-ebdb-4573-bfb6-827b43ef9272)

