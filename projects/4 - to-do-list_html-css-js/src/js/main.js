document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.textContent = taskText;

    // Create complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear the input
  } else {
    alert("Please enter a task!");
  }
}
