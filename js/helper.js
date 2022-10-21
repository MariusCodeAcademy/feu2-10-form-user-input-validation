'use strict';
console.log('helper.js');

let inputValue = '';

function isValueEmtpy(valueToCheck) {
  let rezult = valueToCheck.length === 0;
  console.log('rezult ===', rezult);
  return rezult;
}

isValueEmtpy(inputValue);
