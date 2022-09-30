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


