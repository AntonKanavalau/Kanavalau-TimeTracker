/*Get inputData add project*/
let FormElement = document.forms['addProject'];
FormElement.onsubmit = ValidateInfoForm;

function ValidateInfoForm() {
  event.preventDefault();
  let FormElement = document.forms['addProject'];
  let NameElement = FormElement.elements['name'];
  let PositionElement = FormElement.elements['position'];


  let NameValue = NameElement.value;
  let PositionValue = PositionElement.value;

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

  let html = `
      <tr class="projects_list">
        <td class="id">1</td>
        <td>${NameValue}</td>
        <td>${PositionValue}</td>
        <td><input type="email" name="email" placeholder="e-Mail (optionl)"></td>
        <td><input type="text" name="phone" placeholder="Phone (optionl)"></td>
        <td><input type="date" name="birth" placeholder="Birth data (optionl)"></td>
      </tr>
  `;
  const tableBody = document.querySelector('.table__body');
  tableBody.insertAdjacentHTML('beforeend', html);
  FormElement.reset();
  openForm.classList.remove('open');
}