'use strict';

function computerPlay () {
  const options = ['Rock', 'Paper', 'Scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

function play (playerSelection, computerSelection) {
  const pSelection = playerSelection.toLowerCase();
  const cSelection = computerSelection.toLowerCase();
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
}
