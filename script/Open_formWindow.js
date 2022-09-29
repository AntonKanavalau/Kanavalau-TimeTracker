/*Open modal window*/
const newProjectAdd = document.querySelector(".btnAddProject");
const openForm = document.querySelector(".addForm");
newProjectAdd.addEventListener('click', function () {
  openForm.classList.add('open');
  FormElement.reset();
});