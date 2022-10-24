'use-strict';
const input = document.querySelector('.input');
const displayTotal = document.querySelector('.result');
const resultElevy = document.querySelector('.result-elevy');
const networkFee = document.querySelector('.network');
const inputType = document.querySelector('.form__input--type');
const network = document.querySelector('.network__voda');
const resultField = document.querySelector('.total-display');

displayTotal.textContent = `GH¢ ${0}`;
networkFee.textContent = `GH¢ ${0}`;

input.addEventListener('input', (e) => {
  e.preventDefault();
  const amount = Number(input.value);
  if (inputType.value === 'MTN') {
    if (amount > 50 && amount <= 1000) {
      const momoCharge = amount * (0.75 / 100);
      networkFee.textContent = `GH¢ ${momoCharge.toFixed(2)}`;
    }
    if (amount <= 50) networkFee.textContent = `GH¢ ${0.38}`;
    if (amount > 1000) networkFee.textContent = `GH¢ ${7.5}`;
  }
  if (amount > 100) {
    const elevy = amount * 0.015;
    const result = elevy + amount;
    displayTotal.textContent = `GH¢ ${result.toFixed(2)}`;
    resultElevy.textContent = `GH¢ ${elevy.toFixed(2)}`;
  } else {
    displayTotal.textContent = `GH¢ ${amount}`;
    resultElevy.textContent = `GH¢ ${0}`;
  }
});

inputType.addEventListener('change', (e) => {
  e.preventDefault();
  if (inputType.value === 'vodafone') {
    input.value = '';
    displayTotal.textContent = `GH¢ ${0}`;
    resultElevy.textContent = `GH¢ ${0}`;
    networkFee.textContent = `GH¢ ${0}`;
    network.classList.remove('hidden');
    inputType.style.border = '3.5px solid white';
    input.style.border = '5px solid white';
    resultField.style.border = '3.5px solid white';
    document.body.style.backgroundColor = 'rgb(228, 44, 44)';
  }

  if (inputType.value === 'MTN') {
    input.value = '';
    displayTotal.textContent = `GH¢ ${0}`;
    resultElevy.textContent = `GH¢ ${0}`;
    network.classList.remove('hidden');
    inputType.style.border = '3.5px solid rgb(10, 66, 110)';
    input.style.border = '3.5px solid rgb(10, 66, 110)';
    resultField.style.border = '3.5px solid rgb(10, 66, 110)';
    document.body.style.backgroundColor = 'rgb(234, 206, 9)';
  }
  if (inputType.value === 'select') {
    document.querySelector('.network__voda').classList.add('hidden');
    document.body.style.backgroundColor = 'rgb(159, 154, 154)';
  }
});
