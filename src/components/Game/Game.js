import React from 'react';
import GuessInput from '../GuessInput';
import { WORDS } from '../../data';
import { sample } from '../../utils';
import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GameBanner from '../GameBanner/GameBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [previousGuesses, setPreviousGuesses] = React.useState([]);

  const handleSubmit = (guesses) => {

    const newPreviousGuess = [...previousGuesses, guesses];
    setPreviousGuesses(newPreviousGuess);
    if (guesses === answer) {
      setGameStatus('won');
    } else if (newPreviousGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }

  }

  return <>
    <PreviousGuesses
      guesses={previousGuesses}
      answer={answer}
    />
    <GuessInput
      handleSubmit={handleSubmit}
      gameStatus={gameStatus}
    />
    <GameBanner 
      gameStatus={gameStatus} 
      answer={answer} 
      qteOfGuess={previousGuesses.length} />
  </>;
}

export default Game;
