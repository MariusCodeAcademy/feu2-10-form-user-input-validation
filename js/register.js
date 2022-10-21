'use strict';
console.log('register.js');

// nusitaikyti i forma
// const formEl = document.forms[0];
const formEl = document.forms.reg;
const emailEl = document.getElementById('email');
const pswEl = document.getElementById('psw');
const pswRepEl = document.getElementById('psw-repeat');

formEl.addEventListener('submit', (event) => {
  // 1. perimti formos valdyma su javascript, sutabdyti issiuntima
  event.preventDefault();
  console.log('Js is in control');

  // 2. funkcijos viduje gauti visu inputu reiksmes
  const formValuesObj = {
    email: emailEl.value.trim(),
    psw: pswEl.value.trim(),
    pswRepEl: pswRepEl.value.trim(),
  };

  // validacijos

  console.log('formValuesObj ===', formValuesObj);
});
