
import './App.css';
import React, { useState } from 'react';
function App() {

  const [name, setName] = useState("Nafees");

  const changeName = () => {
    setName("Iqbal");
  }

  return (
    <div className="App">
      <div>Hello {name}</div>
      <button className="btn-primary" onClick={changeName} style={{ marginTop: "10px" }}> Click Me </button>
    </div >
  );
}

export default App;
