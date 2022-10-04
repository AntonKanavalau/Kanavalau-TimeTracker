const btnOops = document.getElementById('oops');
const notificationBlock = document.getElementById('notification-block');

btnOops.addEventListener('click', () => createNotification());
function createNotification() {
const block = document.createElement('div');
block.classList.add('notification');
  block.innerHTML = '<h4>(;-;)</h4> <p>Oops... Feature in progress</p>';

  notificationBlock.appendChild(block);

  closeForm ();

  //Close notification
  setTimeout(() => {
    block.remove()
  }, 3500)
}