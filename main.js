const InputOne = document.querySelector('.input-one');
const InputTwo = document.querySelector('.input-two');
const result = document.querySelector('.resultSum');

function sum() {
    const sumNumbers = Number(InputOne.value) + Number(InputTwo.value);
    result.innerHTML = `<span>O RESULTADO É: ${sumNumbers}</span>`
}