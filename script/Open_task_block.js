let containers;
window.addEventListener('click', initDrawers);

function initDrawers() {
  containers = document.querySelectorAll('.dashboard__projectsList');
  setHeights();
  wireUpTriggers();
  window.addEventListener('resize', setHeights);
}

function setHeights() {
  containers.forEach(container => {
    let content = container.querySelector('.timeTaskBlock');
    content.removeAttribute("aria-hidden");

    setTimeout(e => {
      content.setAttribute("aria-hidden", "true");
    }, 0);
  })
}

function wireUpTriggers() {
  containers.forEach(container => {
    let ProjectList = container.querySelector('.section');
    let content = container.querySelector('.timeTaskBlock');

    ProjectList.addEventListener("click", () => {
      container.setAttribute(
        "data-drawer-showing",
        container.getAttribute("data-drawer-showing") === "true" ? "false" : "true"
      );
      content.setAttribute(
        "aria-hidden",
        content.getAttribute("aria-hidden") === "true" ? "false" : "true"
      );
    });
  });
}