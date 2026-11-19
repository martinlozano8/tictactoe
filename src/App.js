import './App.css';
import {useState} from "react";
import Header from './Header'
import Board from './Board'
import Reset from './Reset';

const PLAYERX = "Player 1 - Xs";
const PLAYERO = "Player 2 - Os";


function App() {
  const [moves, setMoves] = useState(0);
  const [turn, setTurn] = useState(PLAYERX);
  const [values, setValues] = useState([
    ["-", "-", "-"],
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
    setMoves(moves=>moves+1);
  }

  function resetClick(){
    console.log("RESET");
    setTurn(PLAYERX);
    setValues([
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
    ]);
}

  return (
    <div className="App">
      <h2>TicTacToe</h2>
      <Header turn={turn} />
      <Board values={values} appClick={appClick} />
      <h3>Número de movimientos: {moves}</h3>
      <Reset resetClick={resetClick}/>

    </div>
  );
}

export default App;
