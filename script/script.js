/*Open windows create new projects*/
/*function openWindow() {
  var addForm = document.querySelector('.add_form');
  if (addForm.style.display === 'none') {
    addForm.classList.add("open");
  } else {
    addForm.classList.remove("open");
  }
}

function closeForm() {
  var addForm = document.querySelector('.add_form');
  if (addForm.style.display === 'flex') {
    addForm.style.display = 'none';
  }
}*/



var newProjectAdd = document.getElementsByClassName(".newProject_add p");
var addForm = document.getElementsByClassName(".add_form div");

/*newProjectAdd.addEventListener('click', function () {
  addForm.classList.add(".open");
});*/

newProjectAdd.onclick = function () {
  addForm.classList.add(".open");
};
