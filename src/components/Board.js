import React from 'react'
import Square from './Square';
import '../App.css';


const Board = ({ squares, onClick }) => {

    const renderSquare = (i) => {
        return (
            <Square
                value={squares[i]}
                onClick={() => onClick(i)}
            />
        )
    };

    return (
        <div className="board">
            <div className="board-row">
                <div className="board-col">
                    {renderSquare(0)}
                </div>
                <div className="board-col-mid">
                    {renderSquare(1)}
                </div>
                <div className="board-col">
                    {renderSquare(2)}
                </div>
            </div>
            <div className="board-row-mid">
                <div className="board-col">
                    {renderSquare(3)}
                </div>
                <div className="board-col-mid">
                    {renderSquare(4)}
                </div>
                <div className="board-col">
                    {renderSquare(5)}
                </div>
            </div>
            <div className="board-row-mid">
                <div className="board-col">
                    {renderSquare(6)}
                </div>
                <div className="board-col-mid">
                    {renderSquare(7)}
                </div>
                <div className="board-col">
                    {renderSquare(8)}
                </div>
            </div>
        </div>
    )
}

export default Board;
