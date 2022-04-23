"use strict";
const buttonOne = document.querySelector('.button-one');
buttonOne.addEventListener('mousedown',function(){
  this.classList.add('click');
})
buttonOne.addEventListener('mouseup',function(){
  this.classList.remove('click');
})
// ---------------------------------------
const buttonTwo = document.querySelector('.button-two');
buttonTwo.addEventListener('mousedown',function(){
  this.classList.add('click-two');
})
buttonTwo.addEventListener('mouseup',function(){
  this.classList.remove('click-two');
})
// ---------------------------------------------
const buttonThree = document.querySelector('.button-three');
buttonThree.addEventListener('mousedown',function(){
  this.classList.add('button-three-animation');
  this.classList.add('button-three-transform');
})
buttonThree.addEventListener('mouseup',function(){
  // this.style.transform = 'translateY('+ -2 + 'px)';
  this.classList.remove('button-three-animation');
  this.classList.remove('button-three-transform');
})