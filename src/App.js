import React, { useState, useEffect } from "react";
import "./App.css";

//現在稱為function component
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Click me
      </button>
    </div>
  );
}

export default App;
