'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

//iterating buttons with .show-modal class
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// close modal with ESC key
document.addEventListener('keydown', function(e){
  // console.log(e.key); // see the key pressed
  
  // if key pressed is Escape and modal not contains hidden class ----> close Modal
  if(e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});