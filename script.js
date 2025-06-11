document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage on page load
    loadTasks();

    // Function to load tasks
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // false = don't save again
        });
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        const items = taskList.querySelectorAll("li");
        items.forEach(item => {
            const taskText = item.firstChild.textContent; // Ignore "Remove" button
            tasks.push(taskText);
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Function to add a task
    function addTask(taskText = taskInput.value.trim(), save = true) {
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        removeBtn.onclick = function () {
            taskList.removeChild(li);
            saveTasks(); // update storage after removal
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        if (save) saveTasks();

        taskInput.value = "";
    }

    // Add task when button clicked
    addButton.addEventListener("click", () => addTask());

    // Add task when Enter key is pressed
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

