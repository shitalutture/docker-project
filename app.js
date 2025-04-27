const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];

function showMenu() {
  console.log("\nMenu:");
  console.log("1. Add a task");
  console.log("2. View tasks");
  console.log("3. Mark task as done");
  console.log("4. Exit");
}

function addTask() {
  rl.question("Enter task description: ", (desc) => {
    tasks.push({ description: desc, done: false });
    console.log("Task added!");
    mainMenu();
  });
}

function viewTasks() {
  if (tasks.length === 0) {
    console.log("No tasks found.");
  } else {
    console.log("\nYour Tasks:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. [${task.done ? "✓" : " "}] ${task.description}`);
    });
  }
  mainMenu();
}

function markTaskDone() {
  viewTasks();
  rl.question("Enter task number to mark as done: ", (number) => {
    const index = parseInt(number) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks[index].done = true;
      console.log("Task marked as done!");
    } else {
      console.log("Invalid task number.");
    }
    mainMenu();
  });
}

function mainMenu() {
  showMenu();
  rl.question("Choose an option: ", (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        viewTasks();
        break;
      case "3":
        markTaskDone();
        break;
      case "4":
        console.log("Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid choice. Try again.");
        mainMenu();
    }
  });
}

console.log("Welcome to Simple Node.js To-Do App!");
mainMenu();
