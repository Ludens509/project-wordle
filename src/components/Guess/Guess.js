import React from 'react';
import { range } from '../../utils'


function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';

  return (
    <span className={className}> {letter}</span>
  );
}

function Guess({ value: validatedGuesses }) {
  const result = validatedGuesses;
  console.log('result', result);

  return (<>

    {/* {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => ( */}
    <p className='guess'>
      {range(5).map((cellIndex) => (
        <Cell key={cellIndex}
          letter={result ? result[cellIndex].letter : undefined}
          status={result ? result[cellIndex].status : undefined} />
      )
      )}
    </p>

  </>);
}

export default Guess;
