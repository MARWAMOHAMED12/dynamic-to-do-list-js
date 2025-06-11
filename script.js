// Run the script after the HTML content is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get the input and remove extra spaces

        if (taskText === "") {
            alert("Please enter a task."); // Alert if input is empty
            return;
        }

        // Create <li> element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // When clicking "Remove", delete the task from the list
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append remove button to list item, and list item to task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field after adding task
        taskInput.value = '';
    }

    // Add task when clicking the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow adding task by pressing "Enter"
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
