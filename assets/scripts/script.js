const firstInput = document.getElementById('num1');
const secInput = document.getElementById('num2');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const clear = document.getElementById('clear');
const result = document.querySelector('.result');

plus.addEventListener('click', calculate);
minus.addEventListener('click', calculate);
multiply.addEventListener('click', calculate);
divide.addEventListener('click', calculate);
clear.addEventListener('click', clearResult);

function calculate(event) {
    const firstVal = firstInput.value;
    const secVal = secInput.value;
    const operator = event.target.id;
    let res = 0;

    if (firstVal === '' || secVal === '' || isNaN(firstVal) || isNaN(secVal)) {
        return result.textContent = "Enter numbers :)";
    }
    switch (operator) {
        case 'plus':
        res = (+firstVal) + (+secVal);
        break;

        case 'minus':
        res = (+firstVal) - (+secVal);
        break;

        case 'multiply':
        res = (+firstVal) * (+secVal);
        break;

        case 'divide':
        res = (+firstVal) / (+secVal);
        break;
    }
    result.textContent = res;
}

function clearResult() {
    firstInput.value = '';
    secInput.value = '';
    result.textContent = '';
}
