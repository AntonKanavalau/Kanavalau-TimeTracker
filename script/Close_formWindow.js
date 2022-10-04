// Close form window
let btnClose = document.querySelectorAll('.close');
btnClose.forEach(btn => {
  btn.addEventListener('click', () => {
    closeForm ();
  })
})

function closeForm () {
  let AddForm = document.querySelectorAll('.addForm');
  AddForm.forEach(removeClass => {
    removeClass.classList.remove('open');
  });

  let inputData = document.querySelectorAll('.data');
  inputData.forEach(data => {
    data.value = '';
  })
}