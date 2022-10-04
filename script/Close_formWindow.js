// Close form window
closeForm ();

function closeForm () {
  let AddForm = document.querySelectorAll('.addForm');
  AddForm.forEach(btnClose => {
    btnClose.addEventListener('click', e => {
      btnClose.classList.remove('open');
    })
  })
}