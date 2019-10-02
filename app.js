import { compareNumbers } from './compare-numbers.js';

const randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
let activePlay = document.getElementById('active-play');
let loser = document.getElementById('lose');
let winner = document.getElementById('win');
let guessesRemaining = 4;
let checkGuess = document.getElementById('user-guess');


checkGuess.addEventListener('click', () => {  
    let userInput = document.getElementById('user-input');
    let userInt = parseInt(userInput.value, 10);
    const check = compareNumbers(userInt, randomNumber);
    if (check === 0){
        activePlay.classList.add('hidden');
        winner.classList.remove('hidden');
        return;
    }
    else if (check === 1 && guessesRemaining !== 1){
        guessesRemaining--;
        const updatedHint = document.getElementById('hint');
        const message = (`Your guess of ${userInt} is too high.  You have ${guessesRemaining} guesses remaining.`);
        updatedHint.textContent = message;

    }
    else if (check === -1 && guessesRemaining !== 1){
        guessesRemaining--;
        const updatedHint = document.getElementById('hint');
        const message = (`Your guess of ${userInt} is too low.  You have ${guessesRemaining} guesses remaining.`);
        updatedHint.textContent = message;
    }

    else {
        // Loser sequence
        activePlay.classList.add('hidden');
        loser.classList.remove('hidden');
        return;
    }
});



