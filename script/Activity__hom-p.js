//Get task title data
/*var taskInput1 = document.getElementById('task_1');
var taskInput2 = document.getElementById('task_2');
var taskTitle1 = document.querySelector('.task_1');
var taskTitle2 = document.querySelector('.task_2');
var taskTitle = document.querySelector('.content__header--task-title');

taskInput1.oninput = function () {
  taskTitle1.innerHTML = taskInput1.value;
  taskTitle.innerHTML = taskInput1.value;
};*/

let ProjectFormOpen = document.querySelector('.addForm');

// Listen tracker
const trackerProjectBlock = document.querySelector('.tracker__ProjectBlock');
trackerProjectBlock.addEventListener('click', (event) => {
  let target = event.target;
  if (target.closest('.projectTime')) {
    openTaskBlock (event);
  }
});

// Listen dashboard
const dashboardProjectsList = document.querySelector('.dashboard__projectsList');
dashboardProjectsList.addEventListener('click', (event) => {
  let target = event.target;
  //Delete project
  if (target.closest('.delete_btn')) {
    target.closest('.projectTime').parentNode.remove('projectSection');
    return false;
  }

  //Open task block
  if (target.closest('.section')) {
    openTaskBlock (event);
  }

  // Open form add task
  if (target.closest('.timeTaskBlock__addTask')) {
    const taskForm = document.querySelector('.addForm--task');
      taskForm.classList.add('open');
  }
});

function openTaskBlock (event) {
  let target = event.target;
  let section = target.parentNode;
  let timeTaskBlock = section.childNodes[3];
  timeTaskBlock.classList.toggle('open');

  //Change arrow
  target.setAttribute("Arrow",
    target.getAttribute("Arrow") === "true" ? "false" : "true");
}

// Open form add project into dashboard
const openFormAddProject = document.querySelector('.newProject_add');
openFormAddProject.addEventListener('click', () => {
  ProjectFormOpen.classList.add('open');
});

//Get inputData add project
let FormElement = document.forms['addProject'];
FormElement.onsubmit = ValidateInfoForm;

function ValidateInfoForm() {
  event.preventDefault();
  let FormElement = document.forms['addProject'];
  let NameProjectElement = FormElement.elements['name_project'];
  let CustomerElement = FormElement.elements['customer'];

  let NameProjectValue = NameProjectElement.value;
  let CustomerValue = CustomerElement.value;

  if (NameProjectValue.length === 0) {
    alert('Please fill Name Project');
    NameProjectElement.focus();
    return false;
  }
  if (CustomerValue.length === 0) {
    alert('Please fill Customer');
    CustomerElement.focus();
    return false;
  }

  let html = `
      <div class="section">
        <section class="projectTime projectTime--header">
        <p class="projectTime-title">${NameProjectValue}</p>
        <p>${CustomerValue}</p>
        <button class="Button_base delete_btn" type="button">
          <i class="material-icons" title="Remove Project">delete</i></button>
        </section>
        <div class="timeTaskBlock">
          <article class="timeTaskBlock__addTask">
          <i class="material-icons">add_task</i>
          <p>create new task</p>
          </article>
        </div>
      </div>
  `;
  const dashboardProjects = document.querySelector('.dashboard__projectsList');
  dashboardProjects.insertAdjacentHTML('beforeend', html);
  FormElement.reset();
  ProjectFormOpen.classList.remove('open');
}