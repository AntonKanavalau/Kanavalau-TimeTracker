/*Open windows create new projects (home pages)*/
var newProjectAdd = document.querySelector(".btnAddProject");
var openForm = document.querySelector(".addForm");
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
  var CompanyNameElement = FormElement.elements['company_name'];
  var NameProjectElement = FormElement.elements['projects_name'];

  var NameProjectValue = NameProjectElement.value;
  var CompanyNameValue = CompanyNameElement.value;

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


  var html = `
      <tr class="projects_list">
        <td class="id">1</td>
        <td class="company">${CompanyNameValue}</td>
        <td class="project_name">${NameProjectValue}</td>
      </tr>
  `;
  var tableBody = document.querySelector('.table__body');
  tableBody.insertAdjacentHTML('beforeend', html);
  FormElement.reset();
  openForm.classList.remove('open');
}