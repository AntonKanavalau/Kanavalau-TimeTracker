"use strict"
//Parallax
window.onload = function () {
  var parallax = document.querySelector('.parallax');
  if (parallax) {
    var background = document.querySelector('.images-parallax__background');
    var items = document.querySelector('.images-parallax__items');
    var people = document.querySelector('.images-parallax__people');

//Coeffecients
    var forBackground = 40;
    var forItems = 20;
    var forPeople = 10;

    //Speed animation
    var speed = 0.05;

    var positionX = 0;
    var positionY = 0;
    var coordXprocent = 0;
    var coordYprocent = 0;

    function setMouseParallaxStyle () {
      var distX = coordXprocent - positionX;
      var distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);

      background.style.cssText = `transform: translate(${positionX / forBackground}%,${positionY / forBackground}%);`;
      items.style.cssText = `transform: translate(${positionX / forItems}%,${positionY / forItems}%);`;
      people.style.cssText = `transform: translate(${positionX / forPeople}%,${positionY / forPeople}%);`;

      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function (e){
      var parallaxWidth = parallax.offsetWidth;
      var parallaxHeight = parallax.offsetHeight;

      var coordX = e.pageX - parallax.offsetWidth / 2;
      var coordY = e.pageY - parallax.offsetHeight / 2;

      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;
    })
  }
}
