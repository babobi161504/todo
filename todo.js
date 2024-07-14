document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("id-todo-input");
  const addButton = document.getElementById("id-add-button");
  const todoList = document.getElementById("id-todo-list");

  addButton.addEventListener("click", function () {
    const taskName = todoInput.value.trim();
    if (taskName !== "") {
      const taskDiv = document.createElement("div");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskName;

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";

      taskDiv.appendChild(checkbox);
      taskDiv.appendChild(taskSpan);
      taskDiv.appendChild(editButton);
      taskDiv.appendChild(deleteButton);

      todoList.appendChild(taskDiv);

      todoInput.value = "";
    }
  });
});
