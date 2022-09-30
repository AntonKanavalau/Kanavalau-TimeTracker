//Get inputData add project
/*let projectTimeHeader = document.querySelectorAll('.projectTime--header');
projectTimeHeader.forEach()*/


let TaskFormOpen = document.querySelector('.addForm--task');
FormElement.onsubmit = ValidateInfoForm;

function ValidateInfoForm() {
  event.preventDefault();
  let FormElement = document.forms['addTask'];
  let NameTaskElement = FormElement.elements['name_task'];

  let NameTaskValue = NameTaskElement.value;

  if (NameTaskValue.length === 0) {
    alert('Please fill Name task');
    NameTaskElement.focus();
    return false;
  }

  let html = `
      <article class="timeTaskBlock__task">
        <input value="${NameTaskValue}">
        <section>
          <p class="task-time"><span class="hours">00</span>:
                               <span class="minutes">00</span>:
                               <span class="seconds">00</span></p>
          <button class="Button_base play-time" type="button">
                  <i class="material-icons">play_circle_outline</i></button>
        </section>
      </article>
  `;

  const timeTaskBlock = document.querySelector('.timeTaskBlock');
  timeTaskBlock.insertAdjacentHTML('beforeend', html);
  FormElement.reset();
  TaskFormOpen.classList.remove('open');
}
