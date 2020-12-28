import React from 'react'

function Result({scores,playAgain}) {
    return (
        <div className="score-board">
            <div className="score">You Scored {scores} / 5 correct answers!</div>
            <button className="playBtn" onClick={playAgain}>
                Play again!
            </button>
        </div>
    )
}

export default Result
