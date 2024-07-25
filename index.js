const CURRENT_YEAR = 2024;
const CORRECT_ANSEWER = 'Die Antwort ist korrekt';
const ERROR_ANSEWER = 'Die Antwort ist falsch';

const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const outputNode = document.querySelector('.js-output');

buttonNode.addEventListener('click', function() {
    const inputValue = inputNode.value;

    if(!inputValue) {
        return;
    }

    const answer = Number(inputNode.value);
    let output = CORRECT_ANSEWER;

    if (answer !== CURRENT_YEAR) {
    output = ERROR_ANSEWER;
   }

   outputNode.innerHTML = output;
});