import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const textArea = document.querySelector('.textarea--js');
const loadBTN = document.querySelector('.load--js');
const saveBTN = document.querySelector('.save--js');


const entry = localStorage.getItem('entry');
let result = "";
if (entry) {
  result = entry;
};

textArea.value = result;

saveBTN.addEventListener("click", () => {
  localStorage.setItem('entry', textArea.value);
  textArea.value = "";
})