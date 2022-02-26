const list = document.querySelector("[data-list]");
let inputFiled = document.querySelector("[data-input-field]");

const checkBtn = document.querySelector("[data-check]");
const deleteBtn = document.querySelector("[data-delete]");

const empty = document.querySelector("[data-empty]");

const actionButtons = document.querySelector(".action-buttons");
emptyTasks();

//Focus in the input field
inputFiled.focus();

inputFiled.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    addTasks(
      createCheckButton(),
      createDeleteButton(),
      createTask(),
      createActionDiv(),
      inputValidation(inputFiled)
    );
  }
});

//Create check button
function createCheckButton() {
  const checkButton = document.createElement("span");

  checkButton.classList.add("material-icons-outlined");
  checkButton.classList.add("btn");
  checkButton.textContent = "done";
  const att = document.createAttribute("data-check");
  checkButton.setAttributeNode(att);
  const onClick = document.createAttribute("onClick");
  onClick.value = "checkTask(this)";
  checkButton.setAttributeNode(onClick);
  checkButton.setAttributeNode(att);
  return checkButton;
}

//Create delete button
function createDeleteButton() {
  const checkDelete = document.createElement("span");

  checkDelete.classList.add("material-icons-outlined");
  checkDelete.classList.add("btn");
  checkDelete.textContent = "delete";
  const att = document.createAttribute("data-delete");
  checkDelete.setAttributeNode(att);
  const onClick = document.createAttribute("onClick");
  onClick.value = "removeTask(this)";
  checkDelete.setAttributeNode(onClick);
  return checkDelete;
}

//Create task item

function createTask() {
  const task = document.createElement("li");

  task.classList.add("task");
  return task;
}

//Add tasks to the list

function createActionDiv() {
  const actionDiv = document.createElement("div");
  actionDiv.classList.add("action-buttons");
  return actionDiv;
}

function inputValidation(input) {
  if (input.value == "") {
    return 0;
  } else {
    return input.value;
  }
}

function addTasks(check, button, task, action, input) {
  action.appendChild(check);
  action.appendChild(button);

  if (input == 0) {
    inputFiled.focus();
    inputFiled.value = "";
    return;
  } else {
    task.textContent = input;
    task.appendChild(action);

    list.appendChild(task);
  }

  emptyTasks();
  inputFiled.focus();
  inputFiled.value = "";
}

//Remove Task
function removeTask(e) {
  e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
  emptyTasks();
}

//Add Check
function checkTask(e) {
  e.parentNode.parentNode.style.textDecoration = "line-through";
  e.parentNode.style.minWidth = "4.4rem";
  e.parentNode.removeChild(e.parentNode.firstChild);
  emptyTasks();
}

//See if there are any tasks available
function emptyTasks() {
  let num = list.childElementCount;
  if (num <= 1) {
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
    return;
  }
}

const addBtn = document.querySelector("[data-add]");
addBtn.addEventListener("click", () => {
  addTasks(
    createCheckButton(),
    createDeleteButton(),
    createTask(),
    createActionDiv(),
    inputValidation(inputFiled)
  );
});
