/*Open windows create new projects*/
var newProjectAdd = document.querySelector(".newProject_add");
var openForm = document.querySelector(".add_form");

newProjectAdd.addEventListener('click', function () {
  openForm.classList.add('open');
});

/*Close window*/
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
    NameProjectElement.focus() || CustomerElement.focus();
    return false;
  }
  /*Add HTML into div.dashboard_projects*/
  var html = `
                <section class="project_block_container">
                <p class="project_title">${NameProjectValue}</p>
                <p class="">${CustomerValue}</p>
                <button class="Button_base" id="delete_btn" type="button">
                  <i class="material-icons" title="Remove Project">delete</i></button>
              </section>
  `;
  var dashboardProjects = document.querySelector('.dashboard_projects');
  dashboardProjects.insertAdjacentHTML('beforeend', html);
}

/*
function projectBlock(){
  var dashboardProjects = document.querySelector('.dashboard_projects');
  dashboardProjects.innerHTML =
    '<section class="project_block_container">
    <p class="project_title">${NameProjectElement}</p>
    <p class="">${CustomerElement}</p>
    <button classN="Button_base" id="delete_btn" type="button">
      <i class="material-icons" title="Remove Project">delete</i></button>
  </section>';
}*/
