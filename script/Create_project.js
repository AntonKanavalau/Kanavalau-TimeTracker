// Open form add project into dashboard
const btnOpenWindow = document.querySelector('.newProject_add');
const formOpen = document.querySelector('.addForm');

btnOpenWindow.addEventListener('click', () => {
  formOpen.classList.add('open');
})

//Get inputData add project
const FormElement = document.forms['addProject'];
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
        <p class="">${CustomerValue}</p>
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

  dashboardProjects.insertAdjacentHTML('beforeend', html);
  FormElement.reset();
  formOpen.classList.remove('open');
}

//Delete project
const dashboardProjects = document.querySelector('.dashboard__projectsList');
let projectSection = document.querySelectorAll('.project-task');
dashboardProjects.addEventListener('click', function (e) {
  let targetItem = e.target;
  if (targetItem.closest('.delete_btn')) {
    targetItem.closest('.projectTime').parentNode.remove(projectSection);
  }
})


