import React from 'react';
// import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
// import Guess from '../Guess/Guess';
// import { checkGuess } from '../../game-helpers';

function GuessInput({ handleSubmit, gameStatus }) {

  const [guesses, setGuesses] = React.useState('');
  // const [previousGuesses, setPreviousGuesses] = React.useState([]);

  const InputHandler = (event) => {
    event.preventDefault();
    if (guesses && guesses.length === 5) {
      // const newPreviousGuess = [...previousGuesses, guesses];
      // setPreviousGuesses(newPreviousGuess);
      handleSubmit(guesses);
      setGuesses('');
      console.log(guesses);
      // console.log(newPreviousGuess);
      // checkGuess(previousGuesses, answer);

    }
  }

  return <>

    {/* <Guess guesses={previousGuesses} /> */}
    {/* <PreviousGuesses guessSubmit={previousGuesses} /> */}

    <div className=''>
      <form className="guess-input-wrapper" onSubmit={InputHandler}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          disabled={gameStatus !== 'running'}
          id="guess-input"
          type="text"
          value={guesses}
          pattern="[a-zA-z]{5}"
          maxLength={5}
          title='Should have exactly 5 letters!'
          onChange={(event) => {
            setGuesses(event.target.value.toUpperCase());
          }}
        />
      </form>
    </div>
  </>;
}

export default GuessInput;
