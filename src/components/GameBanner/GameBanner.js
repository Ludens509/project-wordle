import React from 'react';

function GameBanner({ gameStatus, answer, qteOfGuess }) {
  if (gameStatus === 'won') {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          {' '}
          <strong>
            {qteOfGuess === 1 ?
              '1 guess' :
              `${qteOfGuess} guesses`
            }
          </strong>
        </p>
      </div>
    );
  }
  else if (gameStatus === 'lost') {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    );
  }


}

export default GameBanner;
