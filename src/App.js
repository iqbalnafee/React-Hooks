
import './App.css';
import React, { useState } from 'react';
function App() {

  const [name, setName] = useState("Nafees");

  const [flag, setFlag] = useState(false);

  const changeName = () => {
    //setName("Iqbal");
    setFlag(!flag);
  }

  return (
    <div className="App">
      <div>Hello {flag ? name : ""}</div>
      <button className="btn-primary" onClick={changeName} style={{ marginTop: "10px" }}> Click Me </button>
    </div >
  );
}

export default App;
