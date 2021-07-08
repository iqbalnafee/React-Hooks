
import './App.css';
import CComponents from './components/CComponents';
import FComponents from './components/FComponents';

import React, { useState } from 'react';
function App() {

  const [name, setName] = useState("Nafees");

  const [flag, setFlag] = useState(false);

  const [steps, setSteps] = useState(() => {
    console.log("clicked");
    return 0;
  });

  const [names, setNames] = useState([]);

  const changeName = () => {
    setFlag(!flag);
  }

  const increment = () => {
    setSteps((prevState) => prevState + 1);
    setSteps((prevState) => prevState + 1);
  }

  const decrement = () => {
    setSteps(steps - 1);
  }

  const addNames = (e) => {
    e.preventDefault();
    //setNames(names.push({id:names.length,name:name}));
    //29 and 31 are equivalent
    setNames([...names,{id:names.length,name:name}]);
    setName("");
  }

  const setBooleanFlag = () => {
    setFlag(!flag);
  }

  return (
    <div className="App">
      <div>Hello {flag ? name : ""}</div>
      <button className="btn-primary" onClick={changeName} style={{ marginTop: "10px" }}> Click Me </button>

      <hr></hr>

      <button className="btn-primary" onClick={increment} style={{ marginTop: "10px" }}> +</button>
      <div style={{ marginTop: "10px" }}>{steps}</div>
      <button className="btn-primary" onClick={decrement} style={{ marginTop: "10px" }}> -</button>

      <hr></hr>
      <form onSubmit={ addNames }>

        <input type="text" value={name} placeholder="Add name" onChange={ (e)  => setName(e.target.value) }  />

        <button>Submit</button>

      </form>



      <ul>

        {names.map((item) => (
          <li key={item.key}>{item.name}</li>
        ) )}

      </ul>

      {/* <hr></hr>

      <button onClick={setBooleanFlag}>Toggle class Component</button>

      {flag ? <CComponents />:""} */}

      <hr></hr>

      <button onClick={setBooleanFlag}>Toggle Functional Component</button>

      {flag ? <FComponents />:""}

    </div >
  );
}

export default App;
