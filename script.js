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
openFeatures();

function todoList() {
  var currentTask = [];

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Taski List is Empty");
  }

  function renderTask() {
    localStorage.setItem("currentTask", JSON.stringify(currentTask));
    let allTask = document.querySelector(".allTask");
    let sum = "";
    currentTask.forEach(function (elem, idx) {
      sum += `<div class="task">
              <h5>${elem.task} <span class=${elem.important}>imp</span></h5>
              <button id=${idx}>Mark as completed</button>
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
    renderTask();
    location.reload();

    taskInput.value = "";
    taskDetailsInput = "";
    taskCheckbox.checked = false;
  });

  let markCompleted = document.querySelectorAll(".task button");

  markCompleted.forEach(function (btn) {
    btn.addEventListener("click", function () {
      currentTask.splice(btn.id, 1);

      renderTask();
      location.reload();
    });
  });
}
todoList();
