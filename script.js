'use strict';

function computerPlay () {
  const options = ['Rock', 'Paper', 'Scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound (playerSelection, computerSelection) {
  const pSelection = playerSelection.toLowerCase();
  const cSelection = computerSelection.toLowerCase();

  if (['rock', 'paper', 'scissors'].includes(pSelection)) {
    const isWin = ((pSelection === 'paper') && (cSelection === 'rock')) ||
                  ((pSelection === 'rock') && (cSelection === 'scissors')) ||
                  ((pSelection === 'scissors') && (cSelection === 'paper'));

    if (isWin) {
      return `You Win!!! ${pSelection} beats ${cSelection}.`;
    } else {
      if (pSelection === cSelection) {
        return 'Draw!!!';
      }
      return `You Lose!!! ${cSelection} beats ${pSelection}.`;
    }
  } else {
    return 'Invalid input!!!';
  }
}

function game () {
  for (let i = 1; i <= 5; ++i) {
    console.log(playRound(window.prompt('Enter rock, paper, or scissors: '),
      computerPlay()));
  }
}

game();
