'use strict';
console.log('forms.js');

// nusitaikyti i forma
const formEl = document.getElementById('loginForm');
const usernameInputEl = document.getElementById('username');
const emailInputEl = document.getElementById('email');

// console.log('formEl ===', formEl);

// btn.addEventListener('click', function (event) {
//   console.log(event);
// });

// uzdeti formai issiuntimo klausikli eventListener
formEl.addEventListener('submit', function (event) {
  // event = specialus objekas su informacija apie ivykusi ivyki
  // sutabdo numatytiji veiksma - issiuntima i kita psl
  event.preventDefault();
  console.log('submit ivyko');
  clearErrors();

  // surinkti input reikmes
  const usernameValue = usernameInputEl.value;
  const emailValue = emailInputEl.value;

  // console.log('usernameValue ===', usernameValue);
  // console.log('emailValue ===', emailValue);

  // pirmine validacija
  // jei nera teksto ilgio
  if (usernameValue.length === 0) {
    console.log('iveskite varda');
    // nusitaikyti i usernameInputEl
    // po juo esanti elementa norim parodyti su display block (nextElementSibling)
    usernameInputEl.nextElementSibling.style.display = 'block';
    // jei yra klaida kodas turetu nebevykti toliau
    return;
  }
  // ar usernameValue yra trumpenis nei 3 simboliai

  // pirmine validacija email
  if (emailValue.length === 0) {
    emailInputEl.nextElementSibling.style.display = 'block';
    // jei yra klaida kodas turetu nebevykti toliau
    return;
  }

  // ar ivestame emaile, yra raide '@'

  // If nera klaidu tai siunciam duomenis
  console.log('Sending.....', {
    usernameValue,
    emailValue,
  });
});

/**
 * Su sia funkcija isvalau visas formos klaidas
 */
function clearErrors() {
  console.log('clearing errors');
  // klaidos elementai turi klase .errorFeedback
  // nusitaikyti ivisus el, gaunu kolekcija,
  // sukti cikla per kolekcija
  // slepti kiekviena el

  const errElArr = document.querySelectorAll('.errorFeedback');
  for (let oneErrEl of errElArr) {
    oneErrEl.style.display = 'none';
  }
}
