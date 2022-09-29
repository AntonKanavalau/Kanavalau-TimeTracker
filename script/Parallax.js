"use strict"
//Parallax
window.onload = function () {
  var parallax = document.querySelector('.parallax');
  if (parallax) {
    let background = document.querySelector('.images-parallax__background');
    let items = document.querySelector('.images-parallax__items');
    let people = document.querySelector('.images-parallax__people');

    //Coeffecients
    const forBackground = 40;
    const forItems = 20;
    const forPeople = 10;

    //Speed animation
    const speed = 0.05;

    let positionX = 0;
    let positionY = 0;
    let coordXprocent = 0;
    let coordYprocent = 0;

    function setMouseParallaxStyle() {
      let distX = coordXprocent - positionX;
      let distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);

      background.style.cssText = `transform: translate(${positionX / forBackground}%,${positionY / forBackground}%);`;
      items.style.cssText = `transform: translate(${positionX / forItems}%,${positionY / forItems}%);`;
      people.style.cssText = `transform: translate(${positionX / forPeople}%,${positionY / forPeople}%);`;

      requestAnimationFrame(setMouseParallaxStyle);
    }

    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function (e) {
      let parallaxWidth = parallax.offsetWidth;
      let parallaxHeight = parallax.offsetHeight;

      let coordX = e.pageX - parallax.offsetWidth / 2;
      let coordY = e.pageY - parallax.offsetHeight / 2;

      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;
    })
  }
}
