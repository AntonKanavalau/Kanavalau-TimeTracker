//Get inputData add project
let FormElement = document.forms['addProject'];
FormElement.onsubmit = ValidateInfoForm;

function ValidateInfoForm() {
  event.preventDefault();
  let FormElement = document.forms['addProject'];
  let NameProjectElement = FormElement.elements['name_project'];
  let CompanyNameElement = FormElement.elements['company_name'];
  let TeamElement = FormElement.elements['team'];

  let NameProjectValue = NameProjectElement.value;
  let CompanyNameValue = CompanyNameElement.value;
  let TeamValue = TeamElement.value;

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

  let html = `
        <tr class="projects_list">
          <td class="id">1</td>
          <td class="project_name">${NameProjectValue}</td>
          <td class="color">
            <div class="colorBlock colorBlock--red"></div>
          </td>
          <td class="company">${CompanyNameValue}</td>
          <td class="team">${TeamValue}</td>
        </tr>
  `;
  let tableBody = document.querySelector('.table__body');
  tableBody.insertAdjacentHTML('beforeend', html);
  FormElement.reset();
  openForm.classList.remove('open');
}

//Open window change color
const ColorForm = document.querySelector(".addForm--color");
let ColorBlock = document.querySelectorAll('.colorBlock');
const tableBody = document.querySelector('.table__body');
let colorValue;
let tableColorBlock;

tableBody.addEventListener('click', (e) => {
  tableColorBlock = e.target;

  if (tableColorBlock.closest('.color')) {
    ColorForm.classList.add('open');
  }
  console.log(tableColorBlock);
});

ColorForm.addEventListener('click', (e) => {
  let target = e.target;

  if (target.closest('.colorBlock')) {
    ColorBlock.forEach(elem => elem.classList.remove('box-shadow'));
    target.classList.add('box-shadow');
    colorValue = target;
  }
  //Change color
  if (target.closest('.create')) {
    colorValue.classList.remove('box-shadow');
    tableColorBlock.classList.remove('colorBlock', 'colorBlock--red');

    let classValue = colorValue.getAttribute('class');
    tableColorBlock.setAttribute('class', classValue);
    ColorForm.classList.remove('open');
  }
})