// Open form add task into dashboard
let sectionBlock;

window.addEventListener('load', initDrawers);
function initDrawers() {
  // Get the containing elements
  sectionBlock = document.querySelectorAll('.section')
  setHeights();
  wireUpTriggers();
  window.addEventListener("resize", setHeights);
}

function setHeights() {
  sectionBlock.forEach(section => {
    // Get content
    let timeTaskBlock = section.querySelector('.timeTaskBlock');
    setTimeout(e => {
      section.classList.add("height-is-set");
      timeTaskBlock.setAttribute("aria-hidden", "true");
    }, 0);
  });
}

//Get inputData add project
/*
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
        <input id="task_2" value="Task_2">
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
  formOpen.classList.remove('open');
}*/
