const addTask = document.getElementById("add-task");
const taskInput = document.getElementById("task");
const taskDiv = document.getElementById("all-task");
const errorDiv = document.getElementById("erorr-div");

addTask.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskTest = taskInput.value;
  if (taskTest) {
    console.log(taskTest);
    taskInput.value = "";
    errorDiv.innerHTML = "";

    // create div
    const singleTaskDiv = document.createElement("div");
    singleTaskDiv.classList.add("single-task");

    // create input
    const singleTaskTest = document.createElement("input");
    singleTaskTest.type = "Text";
    singleTaskTest.value = taskTest;
    singleTaskTest.setAttribute("readonly", "readonly");

    // Edit button
    const editTask = document.createElement("button");
    editTask.classList.add("edit-task");
    editTask.innerText = "Edit";

    const completeTask = document.createElement("button");
    completeTask.classList.add("complete-task");
    completeTask.innerText = "Complete";

    const deleteTask = document.createElement("button");
    deleteTask.classList.add("delete-task");
    deleteTask.innerText = "Delete";

    //  create component

    singleTaskDiv.appendChild(singleTaskTest);
    singleTaskDiv.appendChild(editTask);
    singleTaskDiv.appendChild(completeTask);
    singleTaskDiv.appendChild(deleteTask);

    // Add task div

    taskDiv.appendChild(singleTaskDiv);

    //  Edit task function

    editTask.addEventListener("click", function (e) {
      if (editTask.innerText == "Edit") {
        editTask.innerText = "Save";
        singleTaskTest.removeAttribute("readonly");
        singleTaskTest.focus();
      } else {
        editTask.innerText = "Edit";
        singleTaskTest.setAttribute("readonly", "readonly");
      }
    });

    //  Completed task function
    completeTask.addEventListener("click", function (e) {
      if (completeTask.innerText == "Complete") {
        completeTask.innerText = "Completed";
        singleTaskDiv.classList.add("task-completed");
      }
    });

    // Delete function
    deleteTask.addEventListener("click", function (e) {
      taskDiv.removeChild(singleTaskDiv);
    });
  } else {
    errorDiv.innerHTML = "<p>Please write task name!</P>";
  }
});
