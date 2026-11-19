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
    ["-", "-", "-"],
  ]);

  return (
    <div className="App">
      <h2>TicTacToe</h2>
      <Header turn={turn} />
      <Board values={values} />
    </div>
  );
}

export default App;
