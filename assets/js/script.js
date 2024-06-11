const changeborder = document.getElementById('changeborder');
const stickerInputs = document.querySelectorAll('input');
const calculateButton = document.getElementById('count');
const amount_info = document.getElementById('amount_info');
const llave_1 = document.getElementById('llave_1');
const llave_2 = document.getElementById('llave_2');
const llave_3 = document.getElementById('llave_3');
const validar= document.getElementById('validar');

function isValidNumber(value) {
  const num = parseInt(value, 10);
  return !isNaN(num) && num >= 0;
}

changeborder.addEventListener('click', () => {
  if (changeborder.style.border === '2px solid red') {
    changeborder.style.border = '';
  } else {
    changeborder.style.border = '2px solid red';
  }
});

calculateButton.addEventListener('click', () => {
  let totalStickers = 0;
  stickerInputs.forEach(input => {
    const value = parseInt(input.value, 10) || 0;
    if (value >= 0) {
      totalStickers += value;
    }
  });

  if (totalStickers <= 10) {
    amount_info.textContent = `Llevas ${totalStickers} stickers`;
  } else {
    amount_info.textContent = "Exceso de stickers";
  }
});

validar.addEventListener('click', () => {
  const password = `${llave_1.value}${llave_2.value}${llave_3.value}`;
  if (password === '911') {
    validar.textContent = "Password 1 correcto";
  } else if (password === '714') {
    validar.textContent = "Password 2 correcto";
  } else {
    validar.textContent = "Password incorrecto";
  }
});
