import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(0);
  const [doubleNum, setDoubleNum] = useState(0);

  // kicks in when it detects a change in state, specific to the variable number (if number array is left blank, it will kick in at ANY change in state)
  useEffect(() => {
    // check to see if this useEffect has been called
    console.log("I have been called")
    setDoubleNum(number * 2)
  }, [number])

  const handleInc = () => {
    setNumber(number + 1)
    // setDoubleNum(number * 2)
  }

  const handleDec = () => {
    setNumber(number - 1)
    // setDoubleNum(number * 2)
  }

  return (
    <div className="App">
      <h1>Side Effects / Use Effects</h1>
      <button value={number} onClick={handleInc}> + </button>
      <button value={number} onClick={handleDec}> - </button>
      <br></br>
      <h2>Number is {number}</h2>
      <br></br>
      <h3>Hard-coded doubled number is {number*2}</h3>
      <br></br>
      <h3>UseState doubled number is {doubleNum}</h3>
    </div>
  );
}

export default App;
