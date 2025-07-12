function openFeatures() {
  var allElems = document.querySelectorAll(".elem");
  var fullELemPage = document.querySelectorAll(".fullElem");
  var allFullElemsBackBtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullELemPage[elem.id].style.display = "block";
    });
  });
  allFullElemsBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      fullELemPage[back.id].style.display = "none";
    });
  });
}
// openFeatures();

let currentTask = [
  {
    task: "Task 1",
    details: "Details 1",
    important: true,
  },
  {
    task: "Task 2",
    details: "Details 2",
    important: true,
  },
  {
    task: "Task 3",
    details: "Details 3",
    important: false,
  },
];

function renderTask() {
  let allTask = document.querySelector(".allTask");
  let sum = "";
  currentTask.forEach(function (elem) {
    sum += `<div class="task">
              <h5>${elem.task} <span class=${elem.important}>imp</span></h5>
              <button>Mark as completed</button>
            </div>`;
  });
  allTask.innerHTML = sum;
}
renderTask();
let form = document.querySelector(".addTask form");
let taskInput = document.querySelector(".addTask form #task-input");
let taskDetailsInput = document.querySelector(".addTask form textarea");
let taskCheckbox = document.querySelector(".addTask form #check");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  currentTask.push({
    task: taskInput.value,
    details: taskDetailsInput.value,
    important: taskCheckbox.checked,
  });
  taskInput.value = "";
  taskDetailsInput = "";
  taskCheckbox.checked = false;
  renderTask();
});
