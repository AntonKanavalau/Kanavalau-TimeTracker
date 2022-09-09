/*Open task window*/
var projectTime = document.querySelectorAll('.project_time');
var taskBlock = document.querySelector('.task_block')
for (var i = 0; i < projectTime.length; i++) {
  projectTime[i].addEventListener('click', function () {
    taskBlock.classList.toggle('open');
  });
}

/*Open windows create new projects*/
var newProjectAdd = document.querySelector(".newProject_add");
var openForm = document.querySelector(".add_form");

newProjectAdd.addEventListener('click', function () {
  openForm.classList.add('open');
});

/*Close window create new projects*/
var close = document.querySelectorAll(".close");
for (var i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function () {
    openForm.classList.remove('open');
  });
}

/*Get inputData add project*/
var FormElement = document.forms['addProject'];
FormElement.onsubmit = ValidateInfoForm;

function ValidateInfoForm() {
  var FormElement = document.forms['addProject'];
  var NameProjectElement = FormElement.elements['name_project'];
  var CustomerElement = FormElement.elements['customer'];

  var NameProjectValue = NameProjectElement.value;
  var CustomerValue = CustomerElement.value;

  if ((NameProjectValue.length === 0) || (CustomerValue.length === 0)) {
    alert('Please fill in all lines');
    NameProjectElement.focus() && CustomerElement.focus();
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
  dashboardProjects.insertAdjacentHTML('afterend', html);
  openForm.classList.remove('open');
}


