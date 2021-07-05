import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="App">
      <h2>{count}</h2>
    </div>
  );
}

export default App;
