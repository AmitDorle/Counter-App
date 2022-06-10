import "./App.css";
import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  function increase() {
    setcount(count + 1);
  }
  function decrease() {
    setcount(count - 1);
  }
  function reset(){
    setcount(0);
  }

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="main-counter">
        <button onClick={increase} className="inc-btn">
          Increase
        </button>
        <h2>{count}</h2>
        <button onClick={decrease} className="dec-btn">
          Decrease
        </button>
      </div>
      <div className="reset-container">
        <button onClick={reset} className="reset-btn">Reset</button>
      </div>
    </div>
  );
}

export default App;
