import React from 'react';

function GameBanner({ gameStatus, answer, qteOfGuess, restartGame }) {

  const btnColor = gameStatus === 'won' ? 'var(--color-success)' : 'var(--color-error)';

  if (gameStatus === 'won') {
    return (

      <div className="happy banner">
        <div className='happy-banner-wrapper'>
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
          <div className='play-again-btn-wrapper'>
            <button type='button' className='material-icons play-again-btn' style={{ btnColor }} onClick={restartGame}>replay</button>
          </div>
        </div>
      </div>

    );
  }
  else if (gameStatus === 'lost') {
    return (
      <div className="sad banner">
        <div className="sad-banner-wrapper">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>

          <div className='play-again-btn-wrapper'>
            <button type='button' className='material-icons play-again-btn' style={{ btnColor }} onClick={restartGame}>replay</button>
            {/* <button type='button' className='material-icons play-again-btn' style={{ btnColor }} onClick={() => window.location.reload()}>replay</button> */}
          </div>

        </div>
      </div>
    );
  }


}

export default GameBanner;
