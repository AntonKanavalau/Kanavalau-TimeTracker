/*Get inputData add project*/
let FormElement = document.forms['addProject'];
FormElement.onsubmit = ValidateInfoForm;

function ValidateInfoForm() {
  event.preventDefault();
  let FormElement = document.forms['addProject'];
  let CompanyNameElement = FormElement.elements['company_name'];
  let NameProjectElement = FormElement.elements['projects_name'];

  let NameProjectValue = NameProjectElement.value;
  let CompanyNameValue = CompanyNameElement.value;

  if (CompanyNameValue.length === 0) {
    alert('Please fill Customer name');
    CompanyNameElement.focus();
    return false;
  }
  if (NameProjectValue.length === 0) {
    alert('Please fill Name Project name');
    NameProjectElement.focus();
    return false;
  }

  let html = `
      <tr class="projects_list">
        <td class="id">1</td>
        <td class="company">${CompanyNameValue}</td>
        <td class="project_name">${NameProjectValue}</td>
      </tr>
  `;
  const tableBody = document.querySelector('.table__body');
  tableBody.insertAdjacentHTML('beforeend', html);
  FormElement.reset();
  openForm.classList.remove('open');
}