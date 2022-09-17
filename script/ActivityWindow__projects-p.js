/*Open windows create new projects (home pages)*/
var newProjectAdd = document.querySelector(".btnAddProject");
var openForm = document.querySelector(".addProject_form");
newProjectAdd.addEventListener('click', function () {
  openForm.classList.add('open');
  FormElement.reset();
});

/*Close window creates*/
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
  event.preventDefault();
  var FormElement = document.forms['addProject'];
  var NameProjectElement = FormElement.elements['name_project'];
  var CompanyNameElement = FormElement.elements['company_name'];
  var TeamElement = FormElement.elements['team'];

  var NameProjectValue = NameProjectElement.value;
  var CompanyNameValue = CompanyNameElement.value;
  var TeamValue = TeamElement.value;

  if (NameProjectValue.length === 0) {
    alert('Please fill Name Project');
    NameProjectElement.focus();
    return false;
  }
  if (CompanyNameValue.length === 0) {
    alert('Please fill Customer');
    CompanyNameElement.focus();
    return false;
  }
  if (TeamValue.length === 0) {
    alert('Please fill Team');
    TeamElement.focus();
    return false;
  }

  var ID = 0;

  var html = `
        <tr class="projects_list">
          <td class="id">1</td>
          <td class="project_name">${NameProjectValue}</td>
          <td class="color">
            <div class="color_block"></div>
          </td>
          <td class="company">${CompanyNameValue}</td>
          <td class="team">${TeamValue}</td>
        </tr>
  `;
  var tableBody = document.querySelector('.table-body');
  tableBody.insertAdjacentHTML('beforeend', html);
  FormElement.reset();
  openForm.classList.remove('open');
}