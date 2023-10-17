import { useEffect, useState } from "react";
import Square from "./Square";
import "./styles/Board.css";

const Board = (props) => {
  const { resetGame, setResetGame } = props;
  // console.log(props);
  const [boardState, setBoardState] = useState({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
  });
  const [turn, setTurn] = useState(true);
  const [endGame, setEndGame] = useState(false);
  const side = 3;
  let board = [];
  for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
      board.push({ i, j });
    }
  }

  useEffect(() => {
    if (resetGame) {
      console.log("reset effect");
      setBoardState({
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
      });
    }
    setResetGame(false);
    setEndGame(false);
    setTurn(true);
  }, [resetGame]);

  useEffect(() => {
    console.log("board updated");
    if (checkWinner()) setEndGame(true);
  }, [boardState]);

  const checkWinner = () => {
    if (
      boardState[0] &&
      boardState[0] == boardState[1] &&
      boardState[1] == boardState[2]
    ) {
      console.log("Winner is = ", boardState[0]);
      return true;
    } else if (
      boardState[3] &&
      boardState[3] == boardState[4] &&
      boardState[4] == boardState[5]
    ) {
      console.log("Winner is = ", boardState[3]);
      return true;
    } else if (
      boardState[6] &&
      boardState[6] == boardState[7] &&
      boardState[7] == boardState[8]
    ) {
      console.log("Winner is = ", boardState[6]);
      return true;
    } else if (
      boardState[0] &&
      boardState[0] == boardState[4] &&
      boardState[4] == boardState[8]
    ) {
      console.log("Winner is = ", boardState[0]);
      return true;
    } else if (
      boardState[2] &&
      boardState[2] == boardState[4] &&
      boardState[4] == boardState[6]
    ) {
      console.log("Winner is = ", boardState[2]);
      return true;
    } else if (
      boardState[0] &&
      boardState[0] == boardState[3] &&
      boardState[3] == boardState[6]
    ) {
      console.log("Winner is = ", boardState[0]);
      return true;
    } else if (
      boardState[1] &&
      boardState[1] == boardState[4] &&
      boardState[4] == boardState[7]
    ) {
      console.log("Winner is = ", boardState[1]);
      return true;
    } else if (
      boardState[2] &&
      boardState[2] == boardState[5] &&
      boardState[5] == boardState[8]
    ) {
      console.log("Winner is = ", boardState[2]);
      return true;
    } else return false;
  };
  return (
    <>
      {endGame || (
        <div
          style={{
            margin: "0 0 1rem 0",
          }}
        >
          Next Player : {turn ? "X" : "O"}
        </div>
      )}
      {endGame && (
        <div
          style={{
            margin: "0 0 1rem 0",
          }}
        >
          Winner : {turn ? "O" : "X"}
        </div>
      )}
      <div className="board">
        {board.map((ele) => {
          return (
            <Square
              key={ele.i + " " + ele.j}
              id={ele}
              boardState={boardState}
              setBoardState={setBoardState}
              turn={turn}
              setTurn={setTurn}
              endGame={endGame}
            />
          );
        })}
      </div>
    </>
  );
};

export default Board;
