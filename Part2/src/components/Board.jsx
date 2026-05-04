import { useState } from 'react';
import './Board.css';

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            <span className="square-value">{value}</span>
        </button>
    );
}

export default function Board({ }) {
    const [xIsNext, setXIsNext] = useState(true);
    const [xScore, setXScore] = useState(0);
    const [oScore, setOScore] = useState(0);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {

        const nextSquares = squares.slice();

        if (xIsNext) {
            nextSquares[i] = 'X';
        }
        else {
            nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    function checkWinner() {}

    function newGame() {}

    function resetGame() {}
    
    return (
        <>
            <h1>Tic Tac Toe</h1>
            <h2>Scores - X: {xScore} | O: {oScore}</h2>
            <div>
                Your turn, {xIsNext ? 'X' : 'O'}
            </div>
            <div className="board">
                <div className="status">{status}</div>
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className="board-row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className="board-row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>
            <div className="display-win"></div>
            <button className="new-game" onClick={newGame}>New Game</button>
            <button className="reset" onClick={resetGame}>Reset</button>
        </>
    );
}