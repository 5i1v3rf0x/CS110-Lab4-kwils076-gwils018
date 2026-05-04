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
    const [winner, setWinner] = useState(null);
    const [gameActive, setGameActive] = useState(true);
    const [turnCount, setTurnCount] = useState(0);
    const win_patterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    function handleClick(i) {

        if (!gameActive || squares[i]) {
            return;
        }
        
        const nextSquares = squares.slice();
        setTurnCount(turnCount + 1);

        if (xIsNext) {
            nextSquares[i] = 'X';
        }
        else {
            nextSquares[i] = 'O';
        }
        setSquares(nextSquares);

        const winner = checkWinner(nextSquares);
        if (winner) {
            setWinner(winner);
            setGameActive(false);
            if (winner === 'X') {
                setXScore(xScore + 1);
            } else {
                setOScore(oScore + 1);
            }
        }
        else if (turnCount === 8) {
            setGameActive(false);
        }
        setXIsNext(!xIsNext);
    }

    function checkWinner(squares) {
        for (let index = 0; index < win_patterns.length; index++) {
            const [a, b, c] = win_patterns[index];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

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
            <div className="display-win">{winner && <span>Player {winner} wins!</span>}</div>
            <div className="display-draw">{!winner && !gameActive && <span>It's a tie!</span>}</div>
            <button className="new-game" onClick={newGame}>New Game</button>
            <button className="reset" onClick={resetGame}>Reset</button>
        </>
    );
}