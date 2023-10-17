import { useEffect, useState } from "react";
import "./styles/Square.css";

const Square = (props) => {
  console.log(props);
  const [state, setState] = useState();
  const { id, boardState, setBoardState, turn, setTurn, endGame } = props;
  const [clickable, setClickable] = useState(true);

  useEffect(() => {
    console.log("updated state");
    setClickable(true);
  }, [boardState]);

  const handleClick = () => {
    if (clickable && !endGame) {
      const pos = id.i * 3 + id.j;
      // console.log(pos);
      let newBoardState = { ...boardState };
      newBoardState[pos] = turn ? "X" : "O";
      setState(turn ? "X" : "O");
      setTurn(!turn);
      setBoardState(newBoardState);
      setClickable(false);
    }
  };
  return (
    <div onClick={handleClick} className="square">
      <label>{boardState[id.i * 3 + id.j]}</label>
    </div>
  );
};

export default Square;
