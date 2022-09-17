var i;

/*Open task window into timeProject_container*/
var projectTime = document.querySelectorAll('.list');
var taskBlock = document.querySelector('.task_block')
for (i = 0; i < projectTime.length; i++) {
  projectTime[i].addEventListener('click', function () {
    taskBlock.classList.toggle('open');
  });
}

/*Open windows create new projects (home pages)*/
var newProjectAdd = document.querySelector(".newProject_add");
var openForm = document.querySelector(".addProject_form");
newProjectAdd.addEventListener('click', function () {
  openForm.classList.add('open');
});

/*Open windows create new projects (project pages)*/
/*var addProject = document.querySelector(".Button_base");
addProject.addEventListener('click', function () {
  openForm.classList.add('open');
});*/



/*Close window creates*/
var close = document.querySelectorAll(".close");
for (i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function () {
    openForm.classList.remove('open');
    addTaskForm.classList.remove('open');
  });
}

/*Open task window into dashboard_projects*/
var projectBlockContainer = document.querySelectorAll('.header_dashboard');
var DPtaskBlock = document.getElementById('DP_taskBlock_1');
for (i = 0; i < projectBlockContainer.length; i++) {
  projectBlockContainer[i].addEventListener('click', function () {
    DPtaskBlock.classList.toggle('open');
  });
}



/*Open window create new task*/
var addTask = document.querySelector(".addTask");
var addTaskForm = document.querySelector(".addTask_form");
addTask.addEventListener('click', function () {
  addTaskForm.classList.add('open');
});



/*Get task title data*/
var taskInput1 = document.getElementById('task_1');
var taskInput2 = document.getElementById('task_2');
var taskTitle1 = document.querySelector('.task_1');
var taskTitle2 = document.querySelector('.task_2');

taskInput1.oninput = function () {
  taskTitle1.innerHTML = taskInput1.value;
};

taskInput2.oninput = function () {
  taskTitle2.innerHTML = taskInput2.value;
};

/*Get inputData add project*/
var FormElement = document.forms['addProject'];
FormElement.onsubmit = ValidateInfoForm;

function ValidateInfoForm() {
  event.preventDefault();
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
  var ID = 0;

  var html = `
      <div class="section" id="${ID}">
        <section class="projectTime__container header_dashboard">
        <p class="project_title">${NameProjectValue}</p>
        <p class="">${CustomerValue}</p>
        <button class="Button_base" id="delete_btn" type="button">
          <i class="material-icons" title="Remove Project">delete</i></button>
        </section>
        <div class="task_block">
          <article class="addTask">
          <i class="material-icons">add_task</i>
          <p>create new task</p>
          </article>
        </div>
      </div>
  `;
  var dashboardProjects = document.querySelector('.dashboard_projects');
  dashboardProjects.insertAdjacentHTML('beforeend', html);
  FormElement.reset();
  openForm.classList.remove('open');
}

/*Get inputData add task*/
/*
var FormElement = document.forms['addTask'];
FormElement.onsubmit = ValidateInfoForm;
event.preventDefault();
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
        <input id="task_${obj.id}">
        <section>
          <p class="task-time" title="00:00:00">00:00:00</p>
          <button class="Button_base play-time"
                  type="button"><i class="material-icons">play_circle_outline</i></button>
        </section>
      </article>
  `;
  DPtaskBlock.insertAdjacentHTML('beforebegin', html);
  openForm.classList.remove('open');
}*/


