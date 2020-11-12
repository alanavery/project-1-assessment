let count = 0;

let countDisplay = document.getElementById('count-display');
let inputNumber = document.getElementById('input-number');
let divControls = document.getElementById('div-controls');

let changeCount = event => {
  if (event.target.id === 'button-add') {
    count += Number(inputNumber.value);
  } else if (event.target.id === 'button-subtract') {
    count -= Number(inputNumber.value);
  }
  countDisplay.textContent = count;
  if (count < 0) {
    countDisplay.style.color = 'red';
  } else {
    countDisplay.style.color = 'black';
  }
};

divControls.addEventListener('click', changeCount);