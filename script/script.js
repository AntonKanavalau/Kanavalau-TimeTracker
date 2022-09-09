/*Open windows create new projects*/
var newProjectAdd = document.querySelector(".newProject_add");
var addForm = document.querySelector(".add_form");

newProjectAdd.addEventListener('click', function () {
  addForm.classList.add('open');
});

/*Close window*/
var close = document.querySelectorAll(".close");
for (var i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function () {
    addForm.classList.remove('open');
  });
}

/*Get inputData add project*/
var nameProject = document.getElementById('name_project');
var customer = document.getElementById('customer');

