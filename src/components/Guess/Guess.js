import React from 'react';
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers';


function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';

  return (
    <span className={className}> {letter}</span>
  );
}

function Guess({ value: letter, answer }) {
  const result = checkGuess(letter, answer);
  console.log(result);

  return (<>

    {/* {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => ( */}
    <p className='guess'>
      {range(5).map((cellIndex) => (
        <Cell key={cellIndex}
          letter={result ? result[cellIndex].letter : undefined}
          status={result ? result[cellIndex].status : letter} />
      )
      )}
    </p>

  </>);
}

export default Guess;
