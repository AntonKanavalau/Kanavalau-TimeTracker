/*Open windows create new projects*/
var windowForm = document.getElementById('windowAddForm');
var addForm = document.querySelector('.add_form');
/*
function openWindow() {
  if (addForm.style.display === 'none') {
    addForm.style.display = 'flex';
  } else {
    addForm.style.display = 'none';
  }
}

function closeForm() {
  if (addForm.style.display === 'flex') {
      addForm.style.display = 'none';
  }
}
*/

windowForm.addEventListener('click', function () {
  if (addForm.style.display === 'none') {
    addForm.style.display = 'flex';
  } else {
    addForm.style.display = 'none';
  }
});


