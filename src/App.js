
import './App.css';
import React, { useState } from 'react';
function App() {

  const [name, setName] = useState("Nafees");

  const [flag, setFlag] = useState(false);

  const [steps, setSteps] = useState(0);

  const changeName = () => {
    setFlag(!flag);
  }

  const increment = () => {
    setSteps(steps + 1);
  }

  const decrement = () => {
    setSteps(steps - 1);
  }

  return (
    <div className="App">
      <div>Hello {flag ? name : ""}</div>
      <button className="btn-primary" onClick={changeName} style={{ marginTop: "10px" }}> Click Me </button>

      <hr></hr>

      <button className="btn-primary" onClick={increment} style={{ marginTop: "10px" }}> +</button>
      <div style={{ marginTop: "10px" }}>{steps}</div>
      <button className="btn-primary" onClick={decrement} style={{ marginTop: "10px" }}> -</button>

    </div >
  );
}

export default App;
