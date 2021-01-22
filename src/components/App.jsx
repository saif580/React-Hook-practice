import React from "react";

function App() {
  setInterval(setTime, 1000);
  // let time = new Date().toLocaleTimeString();

  const [initial, showTime] = React.useState("TIME");

  function setTime() {
    let time = new Date().toLocaleTimeString();
    showTime(time);
  }

  return (
    <div className="container">
      <h1>{initial.substring(0, 8)}</h1>
      <button onClick={setTime}>Get Time</button>
    </div>
  );
}

export default App;
