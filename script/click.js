/*Open windows create new projects (home pages)*/
var FormElement = document.forms['addProject'];
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




  var ID = 0;

  var html = `
      <div class="section" id="${ID}">
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
}



