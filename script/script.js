/*Open windows create new projects*/
/*function openWindow() {
  var addForm = document.querySelector('.add_form');
  if (addForm.style.display === 'none') {
    addForm.style.display = 'flex';
  } else {
    addForm.style.display = 'none';
  }
}

function closeForm() {
  var addForm = document.querySelector('.add_form');
  if (addForm.style.display === 'flex') {
      addForm.style.display = 'none';
  }
}*/
var newProjectAdd = document.querySelector(".newProject_add");
var addForm = document.querySelector(".add_form");

newProjectAdd.addEventListener('click', function () {
  addForm.classList.add("open");
});

newProjectAdd.onclick = function () {
  addForm.classList.add("open");
};





