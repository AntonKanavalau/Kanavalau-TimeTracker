/*Open window create new task*/
var addTask = document.querySelector(".timeTaskBlock__addTask");
var addTaskForm = document.querySelector(".addForm--task");
addTask.addEventListener('click', function () {
  addTaskForm.classList.add('open');
  FormElement.reset();
});

/*Get task title data*/
var taskInput1 = document.getElementById('task_1');
/*var taskInput2 = document.getElementById('task_2');*/
var taskTitle1 = document.querySelector('.task_1');
/*var taskTitle2 = document.querySelector('.task_2');*/
var taskTitle = document.querySelector('.content__header--task-title');

taskInput1.oninput = function () {
  taskTitle1.innerHTML = taskInput1.value;
  taskTitle.innerHTML = taskInput1.value;
};

/*taskInput2.oninput = function () {
  taskTitle2.innerHTML = taskInput2.value;
};*/

/*Get inputData add project*/
/*var FormElement = document.forms['addProject'];
FormElement.onsubmit = ValidateInfoForm;

function ValidateInfoForm() {
  event.preventDefault();
  var FormElement = document.forms['addProject'];
  var NameProjectElement = FormElement.elements['name_project'];
  var CustomerElement = FormElement.elements['customer'];

  var NameProjectValue = NameProjectElement.value;
  var CustomerValue = CustomerElement.value;

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


  var html = `
      <div class="section" id="">
        <section class="projectTime projectTime--header">
        <p class="projectTime-title">${NameProjectValue}</p>
        <p class="">${CustomerValue}</p>
        <button class="Button_base" id="delete_btn" type="button">
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

  var dashboardProjects = document.querySelector('.dashboard__projectsList');
  dashboardProjects.insertAdjacentHTML('beforeend', html);
  FormElement.reset();
  openForm.classList.remove('open');
}*/

/*Add id by click*/
/*var ID = 0;

if(FormElement.onclick) {
  ID++;
  return true;
} else {
  return false;
}*/

/*Get inputData add task*/
/*var FormElement = document.forms['addTask'];
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


