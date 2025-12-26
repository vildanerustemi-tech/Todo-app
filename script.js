const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Test: alert për të parë nëse JS po punon
console.log("JS loaded");

addBtn.addEventListener("click", function () {
    if (taskInput.value === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskInput.value;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    taskList.appendChild(li);
    taskInput.value = "";
});
