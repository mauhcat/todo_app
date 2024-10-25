const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

//add task function
function addTask() {
  //set value
  const inputText = taskInput.value.trim();
  if (inputText == "") return; //return empty

  //create task
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = inputText;

  //complete
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Done";
  completeBtn.classList.add("completeBtn");
  completeBtn.addEventListener("click", () => {
    taskSpan.classList.toggle("complete");
  });

  //remove
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("removeBtn");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => remove(taskItem);

  //Appends
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(completeBtn);
  taskItem.appendChild(removeBtn);

  //clear
  taskList.appendChild(taskItem);
  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

function remove(taskItem) {
  taskList.removeChild(taskItem);
}

taskInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter") addTask();
});
