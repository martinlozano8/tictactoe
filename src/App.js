import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import Header from './Header'
import Board from './Board'
import Reset from './Reset';

const PLAYERX = "Player 1 - Xs";
const PLAYERO = "Player 2 - Os";


function App() {
  const [moves, setMoves] = useState(0);
  const [loading, setLoading] = useState(true);
  const [turn, setTurn] = useState(PLAYERX);
  const [values, setValues] = useState([
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ]);

  useEffect(()=>{
    async function fetchData(){
        const res = await fetch("https://api.npoint.io/c734e05e43c5b87dd971");
        const myjson = await res.json();
        console.log(myjson);
        setTurn(myjson.turn);
        setValues(myjson.values);
        setMoves(myjson.moves);
        setLoading(false);
    }
    fetchData();
}, [])

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
      {loading ?  <h1>LOADING...</h1>:  <div> 
      <Header turn={turn} />
      <Board values={values} appClick={appClick} />
      <h3>Número de movimientos: {moves}</h3>
      <Reset resetClick={resetClick}/> </div>}

    </div>
  );
}

export default App;
