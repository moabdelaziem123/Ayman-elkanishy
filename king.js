const menu = document.querySelector('#menu-icon');
const navbar =document.querySelector('.navbar');

menu.onclick = function (){
menu.classList.toggle('bx-x');
navbar.classList.toggle('open');

};