import { compareNumbers } from './compare-numbers.js';



let activePlay = document.getElementById('active-play');
let loser = document.getElementById('lose');
let winner = document.getElementById('win');
let guessesRemaining = 4;
let checkGuess = document.getElementById('user-button');
let randomNumber;
let userInput;

const getRandomNumber = () => {
    randomNumber = Math.ceil(Math.random() * 20);
    return randomNumber;
};

const getUserInput = () => {
    userInput = parseInt(document.getElementById('user-input').value);
    return userInput;
};

const updateResults = (check) => {
    if (check === 0){
        winner.classList.remove('hidden');
        activePlay.classList.add('hidden');
        return;
    }
    else if (check === 1 && guessesRemaining !== 1){
        guessesRemaining--;
        const updatedHint = document.getElementById('hint');
        const message = (`Your guess of ${userInput} is too high.  You have ${guessesRemaining} guesses remaining.`);
        updatedHint.textContent = message;

    }
    else if (check === -1 && guessesRemaining !== 1){
        guessesRemaining--;
        const updatedHint = document.getElementById('hint');
        const message = (`Your guess of ${userInput} is too low.  You have ${guessesRemaining} guesses remaining.`);
        updatedHint.textContent = message;
    }

    else {
        // Loser sequence
        activePlay.classList.add('hidden');
        loser.classList.remove('hidden');
        return;
    }
};

const playRound = () => {
    getRandomNumber();
    const result = compareNumbers(getUserInput(), getRandomNumber());
    updateResults(result);
    document.getElementById('user-input').value = '';    
};

checkGuess.addEventListener('click', playRound);



