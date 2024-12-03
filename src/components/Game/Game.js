import React from 'react';
import GuessInput from '../GuessInput';
import { WORDS } from '../../data';
import { sample } from '../../utils';
import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
// import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // const [guesses, setGuesses] = React.useState('');
  const [previousGuesses, setPreviousGuesses] = React.useState([]);

  const handleSubmit = (guesses) => {

    const newPreviousGuess = [...previousGuesses, guesses];
    setPreviousGuesses(newPreviousGuess);
    // setGuesses('');
    // console.log(guesses);
    // console.log(newPreviousGuess);
    // checkGuess(previousGuesses, answer);

  }

  return <>

    {/* <Guess guesses={previousGuesses} /> */}
    <PreviousGuesses guesses={previousGuesses} answer={answer} />
    <GuessInput handleSubmit={handleSubmit} />
  </>;
}

export default Game;
