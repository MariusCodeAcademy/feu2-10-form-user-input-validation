'use strict';
console.log('forms.js');

// nusitaikyti i forma
const formEl = document.getElementById('loginForm');
const usernameInputEl = document.getElementById('username');
const emailInputEl = document.getElementById('email');

// console.log('formEl ===', formEl);

btn.addEventListener('click', function (event) {
  console.log(event);
});

// uzdeti formai issiuntimo klausikli eventListener
formEl.addEventListener('submit', function (event) {
  // event = specialus objekas su informacija apie ivykusi ivyki
  // sutabdo numatytiji veiksma - issiuntima i kita psl
  console.log(event);

  event.preventDefault();
  console.log('submit ivyko');

  // surinkti input reikmes
  const usernameValue = usernameInputEl.value;
  const emailValue = emailInputEl.value;

  console.log('usernameValue ===', usernameValue);
  console.log('emailValue ===', emailValue);
});
