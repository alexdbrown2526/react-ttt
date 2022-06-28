import React, { useState } from "react";
import { calcWinner } from "../helper";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calcWinner(board);

  const handleClick = (i) => {
    const boardNext = [...board];

    if (winner || boardNext[i]) return;

    boardNext[i] = xIsNext ? "X" : "O";
    setBoard(boardNext);
    setXisNext(!xIsNext);
  };

  const resetBoard = () => {
    return (
      <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
    );
  };

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <p>
        {winner
          ? "Winner:  " + winner
          : "Next player: " + (xIsNext ? "X" : "O")}
      </p>
      {resetBoard()}
    </>
  );
};

export default Game;
