import React from 'react';

import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guess from '../Guess/Guess';
function PreviousGuesses({ guesses, answer }) {


  return (
    <>
      <div className='guess-results'>
        {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => (
          // <p className='guess' key={index}>{guess}</p>
          <Guess key={rowIndex} value={guesses[rowIndex]} answer={answer} />
        )
        )}
      </div>
    </>
  );

}

export default PreviousGuesses;
