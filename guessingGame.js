let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 1;
const form = document.querySelector('form');
const previousGuesses = document.querySelector('#previousGuesses');
const result = document.querySelector('#result');
const div = document.querySelector('#guessing');


const gameOver = () => {
    form.guess.setAttribute('disabled', true);
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Start New Game';
    div.append(resetButton);

    resetButton.addEventListener('click', () => {
        resetButton.parentNode.removeChild(resetButton);
        guesses = 1;
        previousGuesses.textContent = '';
        form.guess.removeAttribute('disabled');
        form.guess.value = '';
        result.removeAttribute('class', 'tooMany');
        result.removeAttribute('class', 'justRight');
        result.textContent = '';
        form.guess.focus();
        randomNumber = Math.floor(Math.random() * 100) + 1;
    })

    resetButton.focus();
};

form.addEventListener('submit', e => {
    e.preventDefault();

    result.removeAttribute('class', 'tooBig');
    result.removeAttribute('class', 'tooSmall');
    result.removeAttribute('class', 'tooMany');
    result.removeAttribute('class', 'justRight');

    let userGuess = Number(form.guess.value);

    if (guesses === 1) {
        previousGuesses.textContent = `Previous Guesses: ${userGuess}  `;
    } else {
        previousGuesses.textContent += `${userGuess}  `;
    }

    if (userGuess === randomNumber) {
        result.setAttribute('class', 'justRight');
        result.textContent = 'Congratulations! You got it right!';
        gameOver();
    } else if (guesses == 10) {
        result.setAttribute('class', 'tooMany');
        result.textContent = '!!! Too many attempts, GAME OVER !!!';
        gameOver();
    } else {
        if (userGuess > randomNumber) {
            result.setAttribute('class', 'tooBig');
            result.textContent = 'WRONG, that guess was too BIG';
        } else if (userGuess < randomNumber) {
            result.setAttribute('class', 'tooSmall');
            result.textContent = 'WRONG, that guess was too small';
        }
    }

    guesses += 1;

    form.guess.value = '';
});