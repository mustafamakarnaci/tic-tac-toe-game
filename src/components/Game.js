import React, { useState, useEffect } from 'react'
import Board from './Board';
import { calculateWinner } from '../helper/calculateWinner';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Game = () => {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? 'X' : 'O';

  const handleClick = (i) => {

    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;

    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
  };


  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };



  const moves = () =>
    history.map((step, move) => {

      const desc = move ? `Go to move ${move}` : "Go to Start";

      return (

        <button type="button" key={move}
          className="list-group-item list-group-item-action list-group-item-dark py-0 mt-1 rounded"
          onClick={() => jumpTo(move)}>{desc}</button>

      );
    });

  return (
    <div className="game container mt-4 p-4 bg-dark">
      <div className="game-board">
        <div className="mr-4" style={{ float: "left" }}>
          <Board squares={history[stepNumber]} onClick={handleClick} />
        </div>

        <div style={{ float: "left" }}>
          <h4 className="alert alert-dark">History</h4>
          <div className="list-group list-group-flush">
            {moves()}
          </div>
        </div>
        <div style={{ float: "right" }}>
          <h4 className="alert alert-dark p-2 ml-2">{winner ? "Winner " + winner : "Next player: " + xO}</h4>
        </div>
      </div>
    </div>
  )
}

export default Game;
