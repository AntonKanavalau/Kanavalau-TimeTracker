// Close form window
const btnClose = document.querySelectorAll('.close');
btnClose.forEach(button => {
  button.addEventListener('click', () => {
    formOpen.classList.remove('open');
    FormElement.reset();
  })
})