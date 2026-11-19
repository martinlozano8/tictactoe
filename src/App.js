import './App.css';
import {useState} from "react";
import Header from './Header'
import Board from './Board'

const PLAYERX = "Player 1 - Xs";
const PLAYERO = "Player 2 - Os";

function App() {
  const [turn, setTurn] = useState(PLAYERO);
  const [values, setValues] = useState([
    ["X", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ]);

  function appClick(rowNumber, columnNumber) {
    console.log("CLICK en " + rowNumber + columnNumber);
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMovement = turn === PLAYERX ? "X" : "O";
    valuesCopy[rowNumber][columnNumber] = newMovement;
    setTurn(turn===PLAYERX ? PLAYERO:PLAYERX);
    setValues(valuesCopy);
  }

  return (
    <div className="App">
      <h2>TicTacToe</h2>
      <Header turn={turn} />
      <Board values={values} appClick={appClick} />
    </div>
  );
}

export default App;
