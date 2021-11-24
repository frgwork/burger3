// const menuBurger = document.querySelector('.menu__burger');

// menuBurger.addEventListener('click', () => {
//   menuBurger.classList.toggle('active');
// })

document.querySelector('.menu__burger').addEventListener('click', function () {
  this.classList.toggle('active');
});