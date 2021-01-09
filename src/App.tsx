import React, { useState, useEffect } from "react";
import calculateTime from "./Helper/CalculateTime";
import Controls from "./Components/Controls";
import "./App.css";

function App() {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timeArray, setTimeArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    let timeArray: Array<number | string> = calculateTime(timeInSeconds);
    setTimeArray(timeArray);
  }, [timeInSeconds]);

  return (
    <main>
      <header className="header">
        <img
          className="logo"
          src="https://img.icons8.com/nolan/100/stopwatch.png"
        />
      </header>
      <div className="App">
        <p className="glow">{timeArray[0]}</p>
        <span className="glow">:</span>
        <p className="glow">{timeArray[1]}</p>
        <span className="glow">:</span>
        <p className="glow">{timeArray[2]}</p>
      </div>
      <Controls setTimeInSeconds={setTimeInSeconds} />
    </main>
  );
}

export default App;
