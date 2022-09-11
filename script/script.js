var i;

/*Open task window into timeProject_container*/
var projectTime = document.querySelectorAll('.project_time');
var taskBlock = document.querySelector('.task_block')
for (i = 0; i < projectTime.length; i++) {
  projectTime[i].addEventListener('click', function () {
    taskBlock.classList.toggle('open');
  });
}

/*Open windows create new projects*/
var newProjectAdd = document.querySelector(".newProject_add");
var openForm = document.querySelector(".addProject_form");
newProjectAdd.addEventListener('click', function () {
  openForm.classList.add('open');
});

/*Close window creates*/
var close = document.querySelectorAll(".close");
for (i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function () {
    openForm.classList.remove('open');
    addTaskForm.classList.remove('open');
  });
}

/*Open task window into dashboard_projects*/
var projectBlockContainer = document.querySelector('.project_block_container');
var DPtaskBlock = document.getElementById('DP_taskBlock');
projectBlockContainer.addEventListener('click', function () {
  DPtaskBlock.classList.toggle('open');
});

/*Open window create new task*/
var addTask = document.querySelector(".addTask");
var addTaskForm = document.querySelector(".addTask_form");
addTask.addEventListener('click', function () {
  addTaskForm.classList.add('open');
});

/*Get inputData add project*/
var FormElement = document.forms['addProject'];
/*FormElement.onsubmit = ValidateInfoForm;*/
var create = document.querySelector('.create');

create.addEventListener('click', ValidateInfoForm)

function ValidateInfoForm() {
  var FormElement = document.forms['addProject'];
  var NameProjectElement = FormElement.elements['name_project'];
  var CustomerElement = FormElement.elements['customer'];

  var NameProjectValue = NameProjectElement.value;
  var CustomerValue = CustomerElement.value;

  if ((NameProjectValue.length === 0) || (CustomerValue.length === 0)) {
    alert('Please fill in all lines');
    NameProjectElement.focus() || CustomerElement.focus();
    return false;
  }
  var html = `
      <section class="project_block_container">
      <p class="project_title">${NameProjectValue}</p>
      <p class="">${CustomerValue}</p>
      <button class="Button_base" id="delete_btn" type="button">
        <i class="material-icons" title="Remove Project">delete</i></button>
      </section>
  `;
  var dashboardProjects = document.querySelector('.dashboard_projects');
  dashboardProjects.insertAdjacentHTML('beforebegin', html);
  openForm.classList.remove('open');
}

/*Get inputData add task*/
var FormElement = document.forms['addTask'];
FormElement.onsubmit = ValidateInfoForm;

create.addEventListener('click', ValidateInfoForm)

function ValidateInfoForm() {
  var FormElement = document.forms['addTask'];
  var NameTaskElement = FormElement.elements['name_task'];

  var NameTasktValue = NameTaskElement.value;

  if (NameTaskElement.length === 0) {
    alert('Please fill in lines');
    NameTaskElement.focus();
    return false;
  }
  var html = `
      <article class="task">
        <p>Task_2</p>
        <section>
          <p class="task-time" title="00:00:00">00:00:00</p>
          <button class="Button_base play-time"
                  type="button"><i class="material-icons">play_circle_outline</i></button>
        </section>
      </article>
  `;
  DPtaskBlock.insertAdjacentHTML('beforebegin', html);
  openForm.classList.remove('open');
}

