let i;

//Open windows create new projects (home pages)
const newProjectAdd = document.querySelector(".btnAddProject");
const openForm = document.querySelector(".addForm");
newProjectAdd.addEventListener('click', function () {
  openForm.classList.add('open');
  FormElement.reset();
});

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

tableBody.addEventListener('click', (e) => {
  let target = e.target;

  if (target.closest('.color')) {
    ColorForm.classList.add('open');
  }
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
    colorValue.getAttribute('class');
    colorValue.classList.remove('box-shadow');

    ColorForm.classList.remove('open');
    console.log(colorValue);
  }
})

/*
const dtnApply = document.querySelector('.create');
dtnApply.addEventListener('click', () => {
  colorValue.getAttribute('class');
  console.log(colorValue);
})*/


//Change color
/*ColorBlock.forEach(color => {
  color.addEventListener('click', () => {
    ColorBlock.forEach(elem => elem.classList.remove('box-shadow'));
    color.classList.add('box-shadow');
  })
})*/

/*let coloValue = color;
const apllyBtn = document.querySelector('.create')*/


/*
formColor.addEventListener('click', (e) => {
  let target = e.target;
  if (target.closest('.colorBlock')) {
    target.classList.add('box--shadow');
    console.log(target);
  }
})*/
