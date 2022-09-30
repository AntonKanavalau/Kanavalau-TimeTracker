// Open form add project into dashboard
let btnOpenWindowProject = document.querySelector('.newProject_add');
let ProjectFormOpen = document.querySelector('.addForm');

btnOpenWindowProject.addEventListener('click', () => {
  ProjectFormOpen.classList.add('open');
})

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
  ProjectFormOpen.classList.remove('open');
}


const dashboardProjects = document.querySelector('.dashboard__projectsList');
dashboardProjects.addEventListener('click', function (e) {
  let target = e.target;
  //Delete project
  if (target.closest('.delete_btn')) {
    target.closest('.projectTime').parentNode.remove('projectSection');
    return false;
  }
  //Open task block
  if (target.closest('.section')) {
    let section = target.parentNode;
    let timeTaskBlock = section.childNodes[3];
    timeTaskBlock.classList.toggle('open');


    console.log(target);
    console.log(section);
    console.log(timeTaskBlock);
  }
})



