// Close form window
let AddForm = document.querySelectorAll('.addForm');
AddForm.forEach(btnClose => {
  btnClose.addEventListener('click', e => {
    let target = e.target;
    if (target.closest('.close')) {
      btnClose.classList.remove('open');
    }
  })
});