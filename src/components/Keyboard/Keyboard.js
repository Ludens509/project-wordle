import React from 'react';
import { alphabetKey } from '../../utils';



function getStatusByLetter(validatedGuesses) {
  // this will be an object with the letter as key and the status as value
  // {letter: 'a-z', status: 'incorrect'}
  const statusObj = {};
  //  Here the .flat() method produce a new array with all sub-array elements
  //  concatenated into it recursively up to the specified depth.
  const allLetters = validatedGuesses?.flat();

  allLetters?.forEach(({ letter, status }) => {
    const currentStatus = statusObj[letter];

    if (currentStatus === undefined) {
      statusObj[letter] = status;
      return;

    }
    const STATUS_ORDER = {
      correct: 1,
      misplaced: 2,
      incorrect: 3
    };

    const currentStatusOrder = STATUS_ORDER[currentStatus];
    const newStatusOrder = STATUS_ORDER[status];

    if (newStatusOrder < currentStatusOrder) {
      statusObj[letter] = status;
    }
  });

  console.log(statusObj);
  console.log('validatedGuesses:', validatedGuesses);
  return statusObj;

}


function Key({ char, status }) {

  const className = status ? `global-guess-word-wrapper keyboard-key ${status}` : 'keyboard-key';
  return (
    <span className={className}>{char}</span>
  );
}

function Keyboard({ validatedGuesses }) {

  const statusByLetter = getStatusByLetter(validatedGuesses);
  console.log('status by letter:', statusByLetter);

  const keyboard = alphabetKey();
  return <>
    <div className='keyboard-main'>
      {keyboard.map((alphakey) => (
        <span key={alphakey} className='keyboard-bg'>
          {Array.from(alphakey).map((char, i) => (
            // <span key={i} className={status ? `keyboard-key ${status}` : 'keyboard-key'}>{char.toUpperCase()}</span>
            <Key key={i} char={char} status={statusByLetter[char]} />
          ))}
        </span>
      ))}
    </div>
  </>;
}

export default Keyboard;
