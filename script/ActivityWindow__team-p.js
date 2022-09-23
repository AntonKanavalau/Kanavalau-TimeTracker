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
  var NameElement = FormElement.elements['name'];
  var PositionElement = FormElement.elements['position'];


  var NameValue = NameElement.value;
  var PositionValue = PositionElement.value;

  if (NameValue.length === 0) {
    alert('Please fill Name');
    NameElement.focus();
    return false;
  }
  if (PositionValue.length === 0) {
    alert('Please fill Position');
    PositionElement.focus();
    return false;
  }

  var html = `
      <tr class="projects_list">
        <td class="id">1</td>
        <td class="project_name">name</td>
        <td class="position">position</td>
        <td class="e-mail"><input type="email" name="email" placeholder="e-Mail (optional)"></td>
        <td class="phone"><input type="text" placeholder="Phone (optional)"></td>
        <td class="date"><input type="date" placeholder="Birth data (optional)"></td>
      </tr>
  `;
  var tableBody = document.querySelector('.table__body');
  tableBody.insertAdjacentHTML('beforeend', html);
  FormElement.reset();
  openForm.classList.remove('open');
}