// انتظر لما الصفحة تتحمل بالكامل
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // دالة لإضافة مهمة
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // إنشاء العنصر <li> للمهمة
        const li = document.createElement("li");
        li.textContent = taskText;

        // زر الحذف
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // عند الضغط على زر الحذف، امسح المهمة
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // ضيف الزر للمهمة، وضيف المهمة للقائمة
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // فضي خانة الإدخال
        taskInput.value = "";
    }

    // لما نضغط على زر "Add Task"
    addButton.addEventListener("click", addTask);

    // لما نضغط Enter في خانة الإدخال
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
/*
    The required functionality is already implemented above:
    - addTask creates li and remove button, sets up removal, and clears input.
    - addButton and taskInput have event listeners for adding tasks.
    No further code is needed here.
*/