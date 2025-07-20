const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("listcontainer");

function addTask() {
  const task = inputBox.value.trim();
  if (!task) {
    alert("Please write down a task");
    return;
  }
}

const li = document.createElement("li");

li.innerHTML = `
  <label>
    <input type="checkbox">
    <span>${task}</span>
  </label>
  <span class="edit-btn">Edit</span>
  <span class="delete-btn">Delete</span>
`;

inputBox.value = "";

function addTask() {
  const task = inputBox.value.trim();
  if (!task) {
    alert("Please write down a task");
    return;
  }

  li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
    `;

  listContainer.appendChild(li);
  inputBox.value = "";
}

const checkbox = li.querySelector("input");
const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector("span");
const deleteBtn = li.querySelector(".delete-btn");

checkbox.addEventListener("click", function () {
  li.classList.toggle("complete", checkbox.checked);
});



editBtn.addEventListener("click", function () {
  const update = prompt("Edit task:", taskSpan.textContent);
  if (update !== null) {
    taskSpan.textContent = update;
    li.classList.remove("complete");
  }
});

li.classList.remove("complete");

const completedCounter = document.getElementById("completecounter");
const uncompletedCounter = document.getElementById("uncompletecounter");

function updateCounters() {
  const completedTasks = document.querySelectorAll(".complete").length;
  const uncompletedTasks =
    document.querySelectorAll("li:not(.complete)").length;

  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = uncompletedTasks;
}

updateCounters();

checkbox.addEventListener("click", function () {
  li.classList.toggle("completed", checkbox.checked);
  //add the function below
  updateCounters();
});

editBtn.addEventListener("click", function () {
  const update = prompt("Edit task:", taskSpan.textContent);
  if (update !== null) {
    taskSpan.textContent = update;
    li.classList.remove("complete");
    //add the code below
    checkbox.checked = false;
    updateCounters();
  }
});

deleteBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to delete this task?")) {
    li.remove();
    updateCounters();
  }
});