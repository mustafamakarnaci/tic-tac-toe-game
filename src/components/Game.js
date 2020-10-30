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

  return (
    <div className="container aaa" >
      <div className="h-25 bg-warning">
        <h1 className="pt-1 display-4">Tic Tac Toe</h1>

        <button type="button"
          className="btn btn-primary text-light btn-lg mt-3"
          onClick={() => jumpTo(0)}>New Game</button>
      </div>

      <div className="h-75" style={{ position: "relative", background: "black" }}>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <h4 className="text-light p-2">{winner ? "Winner " + winner : "Next player: " + xO}</h4>
      </div>
    </div>
  )
}

export default Game;
