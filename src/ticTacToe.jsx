import { useEffect, useState } from "react";
import Board from "./board";
const TicTacToe = () => {
  const [resetGame, setResetGame] = useState(false);
  const handleClick = () => {
    setResetGame(true);
    console.log("onclick");
  };

  // console.log(resetGame);
  // useEffect(() => {
  //   console.log("resetGame", resetGame);
  // }, [resetGame]);
  return (
    <div>
      Lets
      <br />
      <button
        onClick={handleClick}
        style={{
          margin: "1rem",
        }}
      >
        Tic-Tac-Toe
      </button>
      <br />
      <Board resetGame={resetGame} setResetGame={setResetGame} />
    </div>
  );
};

export default TicTacToe;
