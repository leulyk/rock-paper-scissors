'use strict';

let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (ev) => playRound(ev.currentTarget.id, computerPlay()));
});

function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    const pSelection = playerSelection.toLowerCase();
    const cSelection = computerSelection.toLowerCase();
    let result = document.querySelector('#result');

    const isWin = ((pSelection === 'paper') && (cSelection === 'rock')) ||
        ((pSelection === 'rock') && (cSelection === 'scissors')) ||
        ((pSelection === 'scissors') && (cSelection === 'paper'));

    console.log(isWin);

    if (isWin) {
        result.textContent = `You Win!!! ${pSelection} beats ${cSelection}.`;
        result.style.color = 'darkslateblue';
    } else if (pSelection === cSelection) {
        result.textContent = 'Draw!!!';
        result.style.color = 'black';
    } else {
        result.textContent = `You Lose!!! ${cSelection} beats ${pSelection}.`;
        result.style.color = 'darkred';
    }
}
