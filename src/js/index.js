import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const textArea = document.querySelector('.textarea--js');
const loadBTN = document.querySelector('.load--js');
const saveBTN = document.querySelector('.save--js');

const currentValue = localStorage.getItem('entry');

if (currentValue) {
  document.querySelector('.info--js').innerHTML = '!';
}

saveBTN.addEventListener("click", (e) => {
  e.preventDefault(); //zakazuje odświeżania przez formularz po kliknięciu "save"
  localStorage.setItem('entry', textArea.value);
  if (textArea.value) {
    document.querySelector('.info--js').innerHTML = '!';
  } else {
    document.querySelector('.info--js').innerHTML = '';
  }
  textArea.value = "";
})

loadBTN.addEventListener('click', (e) => {
  e.preventDefault(); //zakazuje odświeżania przez formularz po kliknięciu "load"
  textArea.value = localStorage.getItem('entry');

})